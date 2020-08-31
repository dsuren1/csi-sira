/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {connect} = require('react-redux');
const mapType = "openlayers";
const CoordinatesUtils = require('@mapstore/utils/CoordinatesUtils');
const PMap = require('@mapstore/components/map/' + mapType + '/Map');
const Layer = require('@mapstore/components/map/' + mapType + '/Layer');
require('@mapstore/components/map/' + mapType + '/plugins/index');
const {changeMapView} = require('@mapstore/actions/map');
const {Button} = require("react-bootstrap");
const img = require('../../../assets/img/magnifier.png');
const assign = require('object-assign');
const PropTypes = require('prop-types');
const ConfigUtils = require('@mapstore/utils/ConfigUtils');
const {goToMapPage} = require('../../utils/SiraUtils');

class PreviewMap extends React.Component {
    static propTypes = {
        map: PropTypes.object,
        layers: PropTypes.array,
        style: PropTypes.object,
        pointSRS: PropTypes.string,
        center: PropTypes.object,
        zoom: PropTypes.number,
        activeSections: PropTypes.object,
        authParam: PropTypes.object,
        changeMapView: PropTypes.func,
        withMap: PropTypes.bool
    };

    static defaultProps = {
        map: null,
        layers: [],
        style: {height: "300px", width: "100%", display: "block", border: "1px solid black"},
        pointSRS: "EPSG:4326",
        center: null,
        zoom: 15,
        activeSections: {},
        authParam: null,
        withMap: true,
        changeMapView: () => {}
    };

    componentDidUpdate() {
        let m = this.refs.mappa;
        if (m) {
            m.map.setTarget("scheda_pMap");
        }
    }

    fillUrl = (layer) => {
        if (layer.url) {
            return assign({}, layer, {
                url: layer.url.replace("{geoserverUrl}", ConfigUtils.getConfigProp('geoserverUrl'))
            });
        }
        return layer;
    };

    render() {
        return this.props.map && this.props.center && this.props.center.coordinates ?
            (
                <div>
                    <PMap
                        ref="mappa"
                        {...this.props.map}
                        style={this.props.style}
                        mapOptions={{interactions: {
                            doubleClickZoom: false,
                            dragPan: false,
                            altShiftDragRotate: false,
                            keyboard: false,
                            mouseWheelZoom: false,
                            shiftDragZoom: false,
                            pinchRotate: false,
                            pinchZoom: false
                        }}}
                        zoomControl={false}
                        zoom={this.props.zoom}
                        center={this.getCenter([this.props.center])}
                        id="scheda_pMap">
                        {
                            this.props.layers.map((layer, index) =>
                                <Layer key={layer.title || layer.name} position={index} type={layer.type}
                                    options={assign({}, this.fillUrl(layer), {params: {authkey: this.props.authParam && this.props.authParam.authkey ? this.props.authParam.authkey : ''}})}/>
                            )
                        }
                    </PMap>
                    <Button onClick={this.changeMapView} style={{position: "relative", top: "-" + this.props.style.height, 'float': "right", margin: "2px"}}>
                        <img src={img} width={16}/>
                    </Button>
                </div>
            ) : <span/>;
    }

    getCenter = (geometries) => {
        let extent = geometries.reduce((prev, next) => {
            return CoordinatesUtils.extendExtent(prev, CoordinatesUtils.getGeoJSONExtent(next));
        }, CoordinatesUtils.getGeoJSONExtent(geometries[0]));

        let point = {crs: this.props.pointSRS, x: (extent[0] + extent[2]) / 2, y: (extent[1] + extent[3]) / 2};
        return this.props.pointSRS !== "EPSG:4326" ?
            CoordinatesUtils.reproject(point, this.props.pointSRS, "EPSG:4326") : point;
    };

    changeMapView = () => {
        let center = this.getCenter([this.props.center]);
        let zoom = this.props.zoom;
        const proj = this.props.map.projection || "EPSG:3857";
        this.props.changeMapView( center, zoom, this.props.map.bbox, this.props.map.size, null, proj);
        if (!this.props.withMap) {
            goToMapPage(center, zoom);
        }
    };
}

module.exports = connect((state) => {
    return {
        map: (state.map && state.map && state.map.present) || (state.config && state.config.map),
        activeSections: state.cardtemplate.activeSections || {}
    };
}, {
    changeMapView: changeMapView
})(PreviewMap);
