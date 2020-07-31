/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');
LocaleUtils.setSupportedLocales({
    "it": {
        code: "it-IT",
        description: "Italiano"}});

require('./utils/ProjUtils')();

const {loadMapConfig} = require('../MapStore2/web/client/actions/config');
const {configureQueryForm} = require('./actions/siradec');
const {loadTiles} = require('./actions/mosaictile');
const {loadPlatformNumbers} = require('./actions/platformnumbers');
const {configureExporter} = require('./actions/siraexporter');
const {loadUserIdentity} = require('./actions/userprofile');

const appReducers = {
    userprofile: require('./reducers/userprofile'),
    siraControls: require('./reducers/controls'),
    queryform: require('./reducers/queryform'),
    siradec: require('./reducers/siradec'),
    grid: require('./reducers/grid'),
    cardtemplate: require('./reducers/card'),
    featuregrid: require('./reducers/featuregrid'),
    draw: require('../MapStore2/web/client/reducers/draw'),
    security: require('./reducers/siraSecurity'),
    mosaic: require('./reducers/mosaic'),
    metadatainfobox: require('./reducers/metadatainfobox'),
    platformnumbers: require('./reducers/platformnumbers'),
    siraexporter: require('./reducers/siraexporter'),
    addmap: require('./reducers/addmap'),
    cart: require('./reducers/cart'),
    header: require('./reducers/header'),
    siraTree: require('./reducers/siraTree'),
    treeData: require('./reducers/treeData')
};

const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
/**
 * Add custom (overriding) translations with:
 *
 * ConfigUtils.setConfigProp('translationsPath', ['./MapStore2/web/client/translations', './translations']);
 */
ConfigUtils.setConfigProp('translationsPath', ['./MapStore2/web/client/translations', '../translations']);
ConfigUtils.setConfigProp('themePrefix', 'ms2');

/**
 * Use a custom plugins configuration file with:
 *
 * ConfigUtils.setLocalConfigurationFile('localConfig.json');
 */
ConfigUtils.setLocalConfigurationFile('localConfig.json');

/**
 * Use a custom application configuration file with:
 *
 * const appConfig = require('./appConfig');
 *
 * Or override the application configuration file with (e.g. only one page with a mapviewer):
 *
 * const appConfig = assign({}, require('../MapStore2/web/client/product/appConfig'), {
 *     pages: [{
 *         name: "mapviewer",
 *         path: "/",
 *         component: require('../MapStore2/web/client/product/pages/MapViewer')
 *     }]
 * });
 */

const { configUrl, legacy } = ConfigUtils.getUserConfiguration('config', 'json');
const {loadVersion} = require('../MapStore2/web/client/actions/version');

const initialActions = [
    () => loadUserIdentity(),
    () => loadTiles(),
    () => loadPlatformNumbers(),
    () => loadMapConfig(configUrl, legacy),
    () => configureQueryForm(ConfigUtils.getConfigProp("query")),
    () => configureExporter(ConfigUtils.getConfigProp("exporter")),
    () => loadVersion()
];

const appConfig = {
    ...require('./appConfig'),
    appReducers
};

/**
 * Define a custom list of plugins with:
 *
 */
const plugins = require('./plugins');

require('../MapStore2/web/client/product/main')(appConfig, plugins,
    (cfg) => ({
        ...cfg,
        initialActions
    }));

