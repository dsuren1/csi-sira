/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {loadMapConfig} = require('../../MapStore2/web/client/actions/config');
const {configureQueryForm} = require('../actions/siradec');
const {configureExporter} = require('../actions/siraexporter');

const appReducers = {
    userprofile: require('../reducers/userprofile'),
    siraControls: require('../reducers/controls'),
    queryform: require('../reducers/queryform'),
    siradec: require('../reducers/siradec'),
    grid: require('../reducers/grid'),
    cardtemplate: require('../reducers/card'),
    featuregrid: require('../reducers/featuregrid'),
    draw: require('../../MapStore2/web/client/reducers/draw'),
    security: require('../reducers/siraSecurity'),
    siraexporter: require('../reducers/siraexporter')
};

const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');

const { configUrl, legacy } = ConfigUtils.getUserConfiguration('config', 'json');

const initialActions = [
    () => loadMapConfig(configUrl, legacy),
    ()=> configureQueryForm(ConfigUtils.getConfigProp("query")),
    ()=> configureExporter(ConfigUtils.getConfigProp("exporter"))
];

const appConfig = {
    ...require('./appConfig'),
    appReducers,
    printingEnabled: false
};


require('../../MapStore2/web/client/product/main')(appConfig, null, (cfg) => ({
    ...cfg,
    initialActions
}));
