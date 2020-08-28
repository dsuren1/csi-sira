/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {
        // product plugins
        AttributionPlugin: require('@mapstore/product/plugins/Attribution'),
        FooterPlugin: require('@mapstore/product/plugins/Footer'),
        ForkPlugin: require('@mapstore/product/plugins/Fork'),
        HeaderPlugin: require('@mapstore/product/plugins/Header'),
        HomeDescriptionPlugin: require('@mapstore/product/plugins/HomeDescription'),
        MadeWithLovePlugin: require('@mapstore/product/plugins/MadeWithLove'),
        MailingListsPlugin: require('@mapstore/product/plugins/MailingLists'),
        MapTypePlugin: require('@mapstore/product/plugins/MapType'),
        NavMenu: require('@mapstore/product/plugins/NavMenu'),
        // framework plugins
        AddGroupPlugin: require('@mapstore/plugins/AddGroup').default,
        AutoMapUpdatePlugin: require('@mapstore/plugins/AutoMapUpdate'),
        BackgroundSelectorPlugin: require('@mapstore/plugins/BackgroundSelector'),
        BackgroundSwitcherPlugin: require('@mapstore/plugins/BackgroundSwitcher'),
        BurgerMenuPlugin: require('@mapstore/plugins/BurgerMenu'),
        CRSSelectorPlugin: require('@mapstore/plugins/CRSSelector'),
        ContentTabs: require('@mapstore/plugins/ContentTabs'),
        ContextPlugin: require('@mapstore/plugins/Context').default,
        ContextCreatorPlugin: require('@mapstore/plugins/ContextCreator').default,
        ContextManagerPlugin: require('@mapstore/plugins/contextmanager/ContextManager').default,
        CookiePlugin: require('@mapstore/plugins/Cookie'),
        CreateNewMapPlugin: require('@mapstore/plugins/CreateNewMap').default,
        Dashboard: require('@mapstore/plugins/Dashboard'),
        DashboardEditor: require('@mapstore/plugins/DashboardEditor'),
        DashboardsPlugin: require('@mapstore/plugins/Dashboards'),
        DetailsPlugin: require('@mapstore/plugins/Details'),
        DrawerMenuPlugin: require('@mapstore/plugins/DrawerMenu'),
        ExpanderPlugin: require('@mapstore/plugins/Expander'),
        FeatureEditorPlugin: require('@mapstore/plugins/FeatureEditor').default,
        FeaturedMaps: require('@mapstore/plugins/FeaturedMaps'),
        FeedbackMaskPlugin: require('@mapstore/plugins/FeedbackMask'),
        FilterLayerPlugin: require('@mapstore/plugins/FilterLayer').default,
        FloatingLegendPlugin: require('@mapstore/plugins/FloatingLegend'),
        FullScreenPlugin: require('@mapstore/plugins/FullScreen'),
        GeoStoryPlugin: require('@mapstore/plugins/GeoStory').default,
        GeoStoriesPlugin: require('@mapstore/plugins/GeoStories'),
        GeoStoryEditorPlugin: require('@mapstore/plugins/GeoStoryEditor').default,
        GeoStorySavePlugin: require('@mapstore/plugins/GeoStorySave').GeoStorySave,
        GeoStorySaveAsPlugin: require('@mapstore/plugins/GeoStorySave').GeoStorySaveAs,
        DashboardSavePlugin: require('@mapstore/plugins/DashboardSave').DashboardSave,
        DashboardSaveAsPlugin: require('@mapstore/plugins/DashboardSave').DashboardSaveAs,
        GeoStoryNavigationPlugin: require('@mapstore/plugins/GeoStoryNavigation').default,
        GoFull: require('@mapstore/plugins/GoFull'),
        GridContainerPlugin: require('@mapstore/plugins/GridContainer'),
        GroupManagerPlugin: require('@mapstore/plugins/manager/GroupManager'),
        LanguagePlugin: require('@mapstore/plugins/Language'),
        LocatePlugin: require('@mapstore/plugins/Locate'),
        ManagerMenuPlugin: require('@mapstore/plugins/manager/ManagerMenu'),
        ManagerPlugin: require('@mapstore/plugins/manager/Manager'),
        MapEditorPlugin: require('@mapstore/plugins/MapEditor').default,
        MapFooterPlugin: require('@mapstore/plugins/MapFooter'),
        MapLoadingPlugin: require('@mapstore/plugins/MapLoading'),
        MapPlugin: require('@mapstore/plugins/Map'),
        MapSearchPlugin: require('@mapstore/plugins/MapSearch'),
        MapsPlugin: require('@mapstore/plugins/Maps'),
        MapCatalogPlugin: require('@mapstore/plugins/MapCatalog').default,
        MapTemplatesPlugin: require('@mapstore/plugins/MapTemplates').default,
        MeasurePlugin: require('@mapstore/plugins/Measure'),
        MediaEditorPlugin: require('@mapstore/plugins/MediaEditor').default,
        MetadataExplorerPlugin: require('@mapstore/plugins/MetadataExplorer'),
        MousePositionPlugin: require('@mapstore/plugins/MousePosition'),
        NotificationsPlugin: require('@mapstore/plugins/Notifications'),
        OmniBarPlugin: require('@mapstore/plugins/OmniBar'),
        PlaybackPlugin: require('@mapstore/plugins/Playback.jsx'),
        PrintPlugin: require('@mapstore/plugins/Print'),
        QueryPanelPlugin: require('@mapstore/plugins/QueryPanel'),
        RedirectPlugin: require('@mapstore/plugins/Redirect'),
        RedoPlugin: require('@mapstore/plugins/History'),
        RulesDataGridPlugin: require('@mapstore/plugins/RulesDataGrid'),
        RulesEditorPlugin: require('@mapstore/plugins/RulesEditor'),
        RulesManagerFooter: require('@mapstore/plugins/RulesManagerFooter'),
        SavePlugin: require('@mapstore/plugins/Save').default,
        SaveAsPlugin: require('@mapstore/plugins/SaveAs').default,
        SaveStoryPlugin: require('@mapstore/plugins/GeoStorySave'),
        ScaleBoxPlugin: require('@mapstore/plugins/ScaleBox'),
        ScrollTopPlugin: require('@mapstore/plugins/ScrollTop'),
        SearchPlugin: require('@mapstore/plugins/Search'),
        SearchServicesConfigPlugin: require('@mapstore/plugins/SearchServicesConfig'),
        SearchByBookmarkPlugin: require('@mapstore/plugins/SearchByBookmark').default,
        SettingsPlugin: require('@mapstore/plugins/Settings'),
        SnapshotPlugin: require('@mapstore/plugins/Snapshot'),
        StyleEditorPlugin: require('@mapstore/plugins/StyleEditor'),
        ThematicLayerPlugin: require('@mapstore/plugins/ThematicLayer'),
        ThemeSwitcherPlugin: require('@mapstore/plugins/ThemeSwitcher'),
        TimelinePlugin: require('@mapstore/plugins/Timeline'),
        ToolbarPlugin: require('@mapstore/plugins/Toolbar'),
        UndoPlugin: require('@mapstore/plugins/History'),
        UserManagerPlugin: require('@mapstore/plugins/manager/UserManager'),
        UserExtensionsPlugin: require('@mapstore/plugins/UserExtensions').default,
        UserSessionPlugin: require('@mapstore/plugins/UserSession').default,
        VersionPlugin: require('@mapstore/plugins/Version'),
        WFSDownloadPlugin: require('@mapstore/plugins/WFSDownload'),
        WidgetsBuilderPlugin: require('@mapstore/plugins/WidgetsBuilder').default,
        WidgetsPlugin: require('@mapstore/plugins/Widgets').default,
        WidgetsTrayPlugin: require('@mapstore/plugins/WidgetsTray').default,
        ZoomAllPlugin: require('@mapstore/plugins/ZoomAll'),
        ZoomInPlugin: require('@mapstore/plugins/ZoomIn'),
        ZoomOutPlugin: require('@mapstore/plugins/ZoomOut'),

        // project plugins
        InfoPlugin: require('./plugins/InfoPlugin'),
        TOCPlugin: require('./plugins/SIRATOC'),
        CatalogPlugin: require('./plugins/SiraCatalog')
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('@mapstore/components/data/identify/SwipeHeader')
    }
};
