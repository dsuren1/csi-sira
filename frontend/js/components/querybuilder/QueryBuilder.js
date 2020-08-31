const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const GroupField = require('./GroupField');
const SpatialFilter = require('./SpatialFilter');
const QueryToolbar = require('./QueryToolbar');

const Spinner = require('react-spinkit');

require('./queryform.css');

class QueryBuilder extends React.Component {
    static propTypes = {
        params: PropTypes.object,
        featureTypeConfigUrl: PropTypes.string,
        useMapProjection: PropTypes.bool,
        attributes: PropTypes.array,
        groupLevels: PropTypes.number,
        filterFields: PropTypes.array,
        groupFields: PropTypes.array,
        spatialField: PropTypes.object,
        removeButtonIcon: PropTypes.string,
        addButtonIcon: PropTypes.string,
        attributePanelExpanded: PropTypes.bool,
        spatialPanelExpanded: PropTypes.bool,
        showDetailsPanel: PropTypes.bool,
        toolbarEnabled: PropTypes.bool,
        searchUrl: PropTypes.string,
        showGeneratedFilter: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
        ]),
        filterType: PropTypes.string,
        featureTypeName: PropTypes.string,
        ogcVersion: PropTypes.string,
        attributeFilterActions: PropTypes.object,
        spatialFilterActions: PropTypes.object,
        queryToolbarActions: PropTypes.object,
        resultTitle: PropTypes.string,
        pagination: PropTypes.object,
        sortOptions: PropTypes.object,
        hits: PropTypes.bool
    };

    static defaultProps = {
        params: {},
        featureTypeConfigUrl: null,
        useMapProjection: true,
        groupLevels: 1,
        groupFields: [],
        filterFields: [],
        attributes: [],
        spatialField: {},
        removeButtonIcon: "glyphicon glyphicon-minus",
        addButtonIcon: "glyphicon glyphicon-plus",
        attributePanelExpanded: true,
        spatialPanelExpanded: true,
        showDetailsPanel: false,
        toolbarEnabled: true,
        searchUrl: "",
        showGeneratedFilter: false,
        featureTypeName: null,
        pagination: null,
        sortOptions: null,
        hits: false,
        attributeFilterActions: {
            onAddGroupField: () => {},
            onAddFilterField: () => {},
            onRemoveFilterField: () => {},
            onUpdateFilterField: () => {},
            onUpdateExceptionField: () => {},
            onUpdateLogicCombo: () => {},
            onRemoveGroupField: () => {},
            onChangeCascadingValue: () => {},
            onExpandAttributeFilterPanel: () => {},
            onLoadFeatureTypeConfig: () => {}
        },
        spatialFilterActions: {
            onExpandSpatialFilterPanel: () => {},
            onSelectSpatialMethod: () => {},
            onSelectSpatialOperation: () => {},
            onChangeDrawingStatus: () => {},
            onRemoveSpatialSelection: () => {},
            onShowSpatialSelectionDetails: () => {},
            onEndDrawing: () => {},
            onChangeDwithinValue: () => {}
        },
        queryToolbarActions: {
            onQuery: () => {},
            onReset: () => {},
            onChangeDrawingStatus: () => {}
        }
    };

    componentWillReceiveProps(props) {
        let url = props.featureTypeConfigUrl;
        let params = props.params !== this.props.params ? props.params : this.props.params;
        if (url !== this.props.featureTypeConfigUrl) {
            this.props.attributeFilterActions.onLoadFeatureTypeConfig(url, params);
        }
    }

    componentDidMount() {
        if (this.props.featureTypeConfigUrl && this.props.attributes.length < 1) {
            this.props.attributeFilterActions.onLoadFeatureTypeConfig(
                this.props.featureTypeConfigUrl, this.props.params);
        }
    }

    render() {
        return this.props.attributes.length > 0 ? (
            <div id="queryFormPanel">
                <div className="querypanel">
                    <GroupField
                        attributes={this.props.attributes}
                        groupLevels={this.props.groupLevels}
                        filterFields={this.props.filterFields}
                        groupFields={this.props.groupFields}
                        removeButtonIcon={this.props.removeButtonIcon}
                        addButtonIcon={this.props.addButtonIcon}
                        attributePanelExpanded={this.props.attributePanelExpanded}
                        actions={this.props.attributeFilterActions}/>
                    <SpatialFilter
                        useMapProjection={this.props.useMapProjection}
                        spatialField={this.props.spatialField}
                        spatialPanelExpanded={this.props.spatialPanelExpanded}
                        showDetailsPanel={this.props.showDetailsPanel}
                        actions={this.props.spatialFilterActions}/>
                </div>
                <QueryToolbar
                    params={this.props.params}
                    filterFields={this.props.filterFields}
                    groupFields={this.props.groupFields}
                    spatialField={this.props.spatialField}
                    toolbarEnabled={this.props.toolbarEnabled}
                    searchUrl={this.props.searchUrl}
                    showGeneratedFilter={this.props.showGeneratedFilter}
                    featureTypeName={this.props.featureTypeName}
                    ogcVersion={this.props.ogcVersion}
                    filterType={this.props.filterType}
                    actions={this.props.queryToolbarActions}
                    resultTitle={this.props.resultTitle}
                    pagination={this.props.pagination}
                    sortOptions={this.props.sortOptions}
                    hits={this.props.hits}
                />
            </div>
        ) : (<div style={{margin: "0 auto", width: "60px"}}><Spinner spinnerName="three-bounce"/></div>);
    }
}

module.exports = QueryBuilder;
