/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
    pages: [
        { path: "/", component: require('./containers/Home')},
        { path: "/dataset/", component: require('./containers/Dataset')},
        { path: "/dataset/:profile", component: require('./containers/Dataset')},
        { path: "/map/", component: require('./containers/Sira')},
        { path: "/map/:profile", component: require('./containers/Sira')},
        { path: "/nomap/", component: require('./containers/NoMap')},
        { path: "/nomap/:profile", component: require('./containers/NoMap')},
        { path: "/full/", component: require('./containers/FullScreenPanel')},
        { path: "/full/:profile", component: require('./containers/FullScreenPanel')}
    ],
    pluginsDef: require('./plugins.js'),
    initialState: {
        defaultState: {
            mousePosition: {enabled: false},
            controls: {
                help: {
                    enabled: false
                },
                details: {
                    enabled: false
                },
                print: {
                    enabled: false
                },
                toolbar: {
                    active: null,
                    expanded: false
                },
                drawer: {
                    enabled: false,
                    menu: "1"
                },
                RefreshLayers: {
                    enabled: false,
                    options: {
                        bbox: true,
                        search: true,
                        title: false,
                        dimensions: false
                    }
                },
                cookie: {
                    enabled: false,
                    seeMore: false
                }
            },
            maps: {
                mapType: "openlayers"
            },
            maptype: {
                mapType: "openlayers"
            },
            catalog: {
                format: "wms",
                "supportedFormats": [{"name": "wms", "label": "WMS"}, {"name": "csw", "label": "CSW"}]
            },
            mapInfo: {enabled: true, infoFormat: 'application/json' }
        },
        mobile: {
            mapInfo: {enabled: true, infoFormat: 'application/json' },
            mousePosition: {enabled: true, crs: "EPSG:4326", showCenter: true}
        }
    },
    // themeCfg: {
    //     theme: "sira"
    // },
    storeOpts: {
        persist: {
            whitelist: ['security']
        }
    }
};
