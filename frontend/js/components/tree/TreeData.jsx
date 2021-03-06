import React from 'react';
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');
import Tree, {TreeNode} from 'rc-tree';
const TemplateUtils = require('../../utils/TemplateUtils');
import './SiraTree.less';
const {loadCardTemplate} = require('../../actions/card');
const {treeDataLoaded, treeDataLoading} = require('../../actions/treeData');
const {loadFeatureTypeConfig, setWaitingForConfig, setTreeFeatureType} = require('../../actions/siradec');

const TreeData = React.createClass({
    propTypes: {
        featureType: React.PropTypes.string,
        featureId: React.PropTypes.string,
        rootTitle: React.PropTypes.string,
        objects: React.PropTypes.array,
        groups: React.PropTypes.array,
        treeData: React.PropTypes.array,
        configOggetti: React.PropTypes.object,
        waitingForConfig: React.PropTypes.object,
        authParams: React.PropTypes.object,
        loadCardTemplate: React.PropTypes.func,
        loadFeatureTypeConfig: React.PropTypes.func,
        setWaitingForConfig: React.PropTypes.func,
        setTreeFeatureType: React.PropTypes.func,
        loading: React.PropTypes.bool,
        treeDataLoaded: React.PropTypes.func,
        treeDataLoading: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            objects: [],
            groups: [],
            waitingForConfig: null,
            onDetail: () => {},
            setWaitingForConfig: () => {},
            setTreeFeatureType: () => {},
            treeDataLoaded: () => {},
            treeDataLoading: () => {}
        };
    },
    componentWillMount() {
        if (this.props.treeData === null || this.props.treeData === undefined) {
            this.loadDataForTree(this.props);
        } else {
            this.props.treeDataLoading(false);
        }
        if (this.props.waitingForConfig && this.props.waitingForConfig.info) {
            const info = this.props.waitingForConfig.info;
            this.props.setWaitingForConfig(null);
            this.onSelect(null, info);
        }
    },
    componentWillReceiveProps(newProps) {
        if (this.props.featureId !== newProps.featureId) {
            this.loadDataForTree(newProps);
        } else {
            this.props.treeDataLoading(false);
        }
    },
    onSelect(selectedKeys, info) {
        let selectedData = this.searchKey(this.props.treeData[0], info.node.props.eventKey);
        if (selectedData && selectedData.linkToDetail) {
            if (selectedData.linkToDetail.featureId) {
                const featureType = selectedData.linkToDetail.featureType;
                this.props.setTreeFeatureType(featureType);
                const detailsConfig = this.props.configOggetti[featureType];
                const templateUrl = detailsConfig.card.template.default || detailsConfig.card.template;
                let url = detailsConfig.card.service.url;
                Object.keys(detailsConfig.card.service.params).forEach((param) => {
                    url += `&${param}=${detailsConfig.card.service.params[param]}`;
                });
                url = url += "&FEATUREID=" + selectedData.linkToDetail.featureId;
                this.props.loadCardTemplate(templateUrl, url);
            } else {
                const cqlFilter = selectedData.linkToDetail.cqlFilter;
                const featureType = selectedData.linkToDetail.featureType;
                this.props.setTreeFeatureType(featureType);
                if (this.props.configOggetti[featureType]) {
                    const detailsConfig = this.props.configOggetti[featureType];
                    const templateUrl = detailsConfig.card.template.default || detailsConfig.card.template;
                    let url = detailsConfig.card.service.url;
                    Object.keys(detailsConfig.card.service.params).forEach((param) => {
                        url += `&${param}=${detailsConfig.card.service.params[param]}`;
                    });
                    url = url += "&cql_filter=" + cqlFilter;
                    this.props.loadCardTemplate(templateUrl, url);
                } else {
                    let waitingForConfig = {
                        featureType,
                        info
                    };
                    this.props.setWaitingForConfig(waitingForConfig);
                    this.props.loadFeatureTypeConfig(null, {authkey: this.authParams && this.authParams.authkey ? this.authParams.authkey : ''}, featureType, false);
                }
            }
        }
    },
    getChildData(group, object, keyCount) {
        let childCount = 0;
        let title = '';
        group.groupElement.descriptionLabels.forEach((label, index) => {
            title = title + label + TemplateUtils.getElement({xpath: group.groupElement.descriptionValues[index]}, object);
        });
        let featureType;
        let cqlFilter;
        let nomeWFS = TemplateUtils.getElement({xpath: group.groupElement.linkToDetail.nomeWFS}, object);
        if (nomeWFS !== undefined && nomeWFS !== null) {
            featureType = nomeWFS.split('#')[0];
            cqlFilter = nomeWFS.split('#')[1] + "='" + TemplateUtils.getElement({xpath: group.groupElement.linkToDetail.xpath}, object) + "'";
        } else {
            featureType = group.groupElement.linkToDetail.featureType;
            cqlFilter = group.groupElement.linkToDetail.cqlFilter + "='" + TemplateUtils.getElement({xpath: group.groupElement.linkToDetail.xpath}, object) + "'";
        }
        return {
            title: title,
            key: keyCount + '-' + (childCount++),
            linkToDetail: {
                featureType: featureType,
                cqlFilter: cqlFilter
            }
        };
    },
    render() {
        if (this.props.loading) {
            return (<img src={'assets/img/tree/loading.gif'}/>);
        }

        const loop = (data) => {
            return data.map((item) => {
                if (item.children) {
                    return <TreeNode title={item.title} key={item.key}>{loop(item.children)}</TreeNode>;
                }
                return <TreeNode title={item.title} key={item.key} />;
            });
        };
        const treeNodes = this.props.treeData ? loop(this.props.treeData) : [];

        const getKeys = (data) => {
            return data.reduce(function(acc, o) {
                let ret = acc;
                if (o.key) {
                    ret.push(o.key);
                }
                if (o.children) {
                    ret = ret.concat(getKeys(o.children));
                }
                return ret;
            }, []);
        };
        const expandedKeys = this.props.treeData ? getKeys(this.props.treeData) : [];

        return (
            <Tree showLine
                showIcon={false}
                defaultExpandedKeys={expandedKeys}
                onSelect={this.onSelect}>
                {treeNodes}
            </Tree>);
    },
    loadDataForTree(props) {
        let keyCount = 0;
        // Definisco la radice del tree, il dato di partenza
        let treeDataWithRoot = [{
            title: props.rootTitle,
            key: '' + keyCount++,
            linkToDetail: {
                featureType: props.featureType,
                featureId: props.featureId
            }
        }];

        let treeDataFlat = [];
        let groups = props.groups;
        let objects = props.objects;
        groups.forEach(group => {
            objects.forEach(object => {
                let id = TemplateUtils.getElement({xpath: group.groupId.xpath}, object);
                let name = TemplateUtils.getElement({xpath: group.groupName}, object);
                if (group.groupId.value === id) {
                    const data = {
                        title: name,
                        id: id,
                        key: '' + keyCount,
                        children: [this.getChildData(group, object, keyCount++)]
                    };
                    treeDataFlat.push(data);
                }
            });
        });

        // Group objects with the same ID
        let treeData = treeDataFlat.reduce((tmpArray, obj1) => {
            const found = tmpArray.find(obj2 => obj2.id === obj1.id);
            if (!found) {
                // not found, so need to add entire object
                tmpArray.push({title: obj1.title, id: obj1.id, key: obj1.key, children: obj1.children});
            } else {
                // if found, that means object exists, so just concat new children to found.children.
                found.children = found.children.concat(obj1.children);
            }
            return tmpArray;
        }, []);

        // Aggiungo il treeData alla radice del tree
        treeDataWithRoot[0].children = treeData;
        this.props.treeDataLoaded(treeDataWithRoot);
    },
    searchKey(element, key) {
        if (element.key === key) {
            return element;
        } else if (element.children !== undefined && element.children !== null) {
            let result = null;
            for (let i = 0; result === null && i < element.children.length; i++) {
                result = this.searchKey(element.children[i], key);
            }
            return result;
        }
        return null;
    }
});

module.exports = connect((state) => {
    return {
        loading: state.treeData.loading,
        treeData: state.treeData.treeData,
        configOggetti: state.siradec.configOggetti,
        authParams: state.userprofile.authParams,
        waitingForConfig: state.siradec.waitingForConfig
    };
}, dispatch => {
    return bindActionCreators({
        loadCardTemplate,
        setWaitingForConfig,
        loadFeatureTypeConfig,
        setTreeFeatureType,
        treeDataLoaded,
        treeDataLoading
    }, dispatch);
})(TreeData);
