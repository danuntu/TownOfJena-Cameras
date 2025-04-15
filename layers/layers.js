ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10256034.015632, 3721343.037242, -10254240.653712, 3722621.623810]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_TownHall_1 = new ol.format.GeoJSON();
var features_TownHall_1 = format_TownHall_1.readFeatures(json_TownHall_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TownHall_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TownHall_1.addFeatures(features_TownHall_1);
var lyr_TownHall_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TownHall_1, 
                style: style_TownHall_1,
                popuplayertitle: 'TownHall',
                interactive: true,
                title: '<img src="styles/legend/TownHall_1.png" /> TownHall'
            });
var format_ParkBoundary_2 = new ol.format.GeoJSON();
var features_ParkBoundary_2 = format_ParkBoundary_2.readFeatures(json_ParkBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkBoundary_2.addFeatures(features_ParkBoundary_2);
var lyr_ParkBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkBoundary_2, 
                style: style_ParkBoundary_2,
                popuplayertitle: 'ParkBoundary',
                interactive: false,
                title: '<img src="styles/legend/ParkBoundary_2.png" /> ParkBoundary'
            });
var format_ParkingAreas_3 = new ol.format.GeoJSON();
var features_ParkingAreas_3 = format_ParkingAreas_3.readFeatures(json_ParkingAreas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkingAreas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkingAreas_3.addFeatures(features_ParkingAreas_3);
var lyr_ParkingAreas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkingAreas_3, 
                style: style_ParkingAreas_3,
                popuplayertitle: 'ParkingAreas',
                interactive: true,
                title: '<img src="styles/legend/ParkingAreas_3.png" /> ParkingAreas'
            });
var format_ParkFeatures_4 = new ol.format.GeoJSON();
var features_ParkFeatures_4 = format_ParkFeatures_4.readFeatures(json_ParkFeatures_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkFeatures_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkFeatures_4.addFeatures(features_ParkFeatures_4);
var lyr_ParkFeatures_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkFeatures_4, 
                style: style_ParkFeatures_4,
                popuplayertitle: 'ParkFeatures',
                interactive: true,
                title: '<img src="styles/legend/ParkFeatures_4.png" /> ParkFeatures'
            });
var format_WalkingBikeTrail_5 = new ol.format.GeoJSON();
var features_WalkingBikeTrail_5 = format_WalkingBikeTrail_5.readFeatures(json_WalkingBikeTrail_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalkingBikeTrail_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalkingBikeTrail_5.addFeatures(features_WalkingBikeTrail_5);
var lyr_WalkingBikeTrail_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WalkingBikeTrail_5, 
                style: style_WalkingBikeTrail_5,
                popuplayertitle: 'Walking/Bike Trail',
                interactive: true,
                title: '<img src="styles/legend/WalkingBikeTrail_5.png" /> Walking/Bike Trail'
            });
var format_LampPosts_6 = new ol.format.GeoJSON();
var features_LampPosts_6 = format_LampPosts_6.readFeatures(json_LampPosts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LampPosts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LampPosts_6.addFeatures(features_LampPosts_6);
var lyr_LampPosts_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LampPosts_6, 
                style: style_LampPosts_6,
                popuplayertitle: 'Lamp Posts',
                interactive: true,
                title: '<img src="styles/legend/LampPosts_6.png" /> Lamp Posts'
            });
var format_ParkBuildings_7 = new ol.format.GeoJSON();
var features_ParkBuildings_7 = format_ParkBuildings_7.readFeatures(json_ParkBuildings_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkBuildings_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkBuildings_7.addFeatures(features_ParkBuildings_7);
var lyr_ParkBuildings_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkBuildings_7, 
                style: style_ParkBuildings_7,
                popuplayertitle: 'ParkBuildings',
                interactive: true,
                title: '<img src="styles/legend/ParkBuildings_7.png" /> ParkBuildings'
            });
var format_PTZCameras_8 = new ol.format.GeoJSON();
var features_PTZCameras_8 = format_PTZCameras_8.readFeatures(json_PTZCameras_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTZCameras_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTZCameras_8.addFeatures(features_PTZCameras_8);
var lyr_PTZCameras_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTZCameras_8, 
                style: style_PTZCameras_8,
                popuplayertitle: 'PTZ Cameras',
                interactive: true,
                title: '<img src="styles/legend/PTZCameras_8.png" /> PTZ Cameras'
            });
var format_IPCameras_9 = new ol.format.GeoJSON();
var features_IPCameras_9 = format_IPCameras_9.readFeatures(json_IPCameras_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPCameras_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPCameras_9.addFeatures(features_IPCameras_9);
var lyr_IPCameras_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPCameras_9, 
                style: style_IPCameras_9,
                popuplayertitle: 'IP Cameras',
                interactive: true,
                title: '<img src="styles/legend/IPCameras_9.png" /> IP Cameras'
            });
var format_180Cameras_10 = new ol.format.GeoJSON();
var features_180Cameras_10 = format_180Cameras_10.readFeatures(json_180Cameras_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180Cameras_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180Cameras_10.addFeatures(features_180Cameras_10);
var lyr_180Cameras_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180Cameras_10, 
                style: style_180Cameras_10,
                popuplayertitle: '180 Cameras',
                interactive: true,
                title: '<img src="styles/legend/180Cameras_10.png" /> 180 Cameras'
            });
var format_BridgeCoverage_11 = new ol.format.GeoJSON();
var features_BridgeCoverage_11 = format_BridgeCoverage_11.readFeatures(json_BridgeCoverage_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BridgeCoverage_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BridgeCoverage_11.addFeatures(features_BridgeCoverage_11);
var lyr_BridgeCoverage_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BridgeCoverage_11, 
                style: style_BridgeCoverage_11,
                popuplayertitle: 'Bridge Coverage',
                interactive: true,
                title: '<img src="styles/legend/BridgeCoverage_11.png" /> Bridge Coverage'
            });
var format_SlaveBridges_12 = new ol.format.GeoJSON();
var features_SlaveBridges_12 = format_SlaveBridges_12.readFeatures(json_SlaveBridges_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SlaveBridges_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SlaveBridges_12.addFeatures(features_SlaveBridges_12);
var lyr_SlaveBridges_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SlaveBridges_12, 
                style: style_SlaveBridges_12,
                popuplayertitle: 'Slave Bridges',
                interactive: true,
                title: '<img src="styles/legend/SlaveBridges_12.png" /> Slave Bridges'
            });
var format_MasterBridges_13 = new ol.format.GeoJSON();
var features_MasterBridges_13 = format_MasterBridges_13.readFeatures(json_MasterBridges_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasterBridges_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterBridges_13.addFeatures(features_MasterBridges_13);
var lyr_MasterBridges_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterBridges_13, 
                style: style_MasterBridges_13,
                popuplayertitle: 'Master Bridges',
                interactive: true,
                title: '<img src="styles/legend/MasterBridges_13.png" /> Master Bridges'
            });
var format_Switches_14 = new ol.format.GeoJSON();
var features_Switches_14 = format_Switches_14.readFeatures(json_Switches_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Switches_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Switches_14.addFeatures(features_Switches_14);
var lyr_Switches_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Switches_14, 
                style: style_Switches_14,
                popuplayertitle: 'Switches',
                interactive: true,
                title: '<img src="styles/legend/Switches_14.png" /> Switches'
            });
var format_BoysBallField_15 = new ol.format.GeoJSON();
var features_BoysBallField_15 = format_BoysBallField_15.readFeatures(json_BoysBallField_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoysBallField_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoysBallField_15.addFeatures(features_BoysBallField_15);
var lyr_BoysBallField_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoysBallField_15, 
                style: style_BoysBallField_15,
                popuplayertitle: 'Boys Ball Field',
                interactive: true,
                title: '<img src="styles/legend/BoysBallField_15.png" /> Boys Ball Field'
            });
var format_GirlsBallField_16 = new ol.format.GeoJSON();
var features_GirlsBallField_16 = format_GirlsBallField_16.readFeatures(json_GirlsBallField_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GirlsBallField_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GirlsBallField_16.addFeatures(features_GirlsBallField_16);
var lyr_GirlsBallField_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GirlsBallField_16, 
                style: style_GirlsBallField_16,
                popuplayertitle: 'Girls Ball Field',
                interactive: true,
                title: '<img src="styles/legend/GirlsBallField_16.png" /> Girls Ball Field'
            });
var format_WoodedTrail_17 = new ol.format.GeoJSON();
var features_WoodedTrail_17 = format_WoodedTrail_17.readFeatures(json_WoodedTrail_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WoodedTrail_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WoodedTrail_17.addFeatures(features_WoodedTrail_17);
var lyr_WoodedTrail_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WoodedTrail_17, 
                style: style_WoodedTrail_17,
                popuplayertitle: 'Wooded Trail',
                interactive: true,
                title: '<img src="styles/legend/WoodedTrail_17.png" /> Wooded Trail'
            });
var format_EdwardsDrive_18 = new ol.format.GeoJSON();
var features_EdwardsDrive_18 = format_EdwardsDrive_18.readFeatures(json_EdwardsDrive_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdwardsDrive_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdwardsDrive_18.addFeatures(features_EdwardsDrive_18);
var lyr_EdwardsDrive_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdwardsDrive_18, 
                style: style_EdwardsDrive_18,
                popuplayertitle: 'Edwards Drive',
                interactive: true,
                title: '<img src="styles/legend/EdwardsDrive_18.png" /> Edwards Drive'
            });
var format_DixieParkingLot_19 = new ol.format.GeoJSON();
var features_DixieParkingLot_19 = format_DixieParkingLot_19.readFeatures(json_DixieParkingLot_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DixieParkingLot_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DixieParkingLot_19.addFeatures(features_DixieParkingLot_19);
var lyr_DixieParkingLot_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DixieParkingLot_19, 
                style: style_DixieParkingLot_19,
                popuplayertitle: 'Dixie Parking Lot',
                interactive: true,
                title: '<img src="styles/legend/DixieParkingLot_19.png" /> Dixie Parking Lot'
            });
var format_DogtrotTrail_20 = new ol.format.GeoJSON();
var features_DogtrotTrail_20 = format_DogtrotTrail_20.readFeatures(json_DogtrotTrail_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DogtrotTrail_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DogtrotTrail_20.addFeatures(features_DogtrotTrail_20);
var lyr_DogtrotTrail_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DogtrotTrail_20, 
                style: style_DogtrotTrail_20,
                popuplayertitle: 'Dogtrot Trail',
                interactive: true,
                title: '<img src="styles/legend/DogtrotTrail_20.png" /> Dogtrot Trail'
            });
var format_TennisCourts_21 = new ol.format.GeoJSON();
var features_TennisCourts_21 = format_TennisCourts_21.readFeatures(json_TennisCourts_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TennisCourts_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TennisCourts_21.addFeatures(features_TennisCourts_21);
var lyr_TennisCourts_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TennisCourts_21, 
                style: style_TennisCourts_21,
                popuplayertitle: 'Tennis Courts',
                interactive: true,
                title: '<img src="styles/legend/TennisCourts_21.png" /> Tennis Courts'
            });
var format_AmpitheaterTrail_22 = new ol.format.GeoJSON();
var features_AmpitheaterTrail_22 = format_AmpitheaterTrail_22.readFeatures(json_AmpitheaterTrail_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmpitheaterTrail_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmpitheaterTrail_22.addFeatures(features_AmpitheaterTrail_22);
var lyr_AmpitheaterTrail_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmpitheaterTrail_22, 
                style: style_AmpitheaterTrail_22,
                popuplayertitle: 'Ampitheater Trail',
                interactive: true,
                title: '<img src="styles/legend/AmpitheaterTrail_22.png" /> Ampitheater Trail'
            });
var format_WalkingTrail_23 = new ol.format.GeoJSON();
var features_WalkingTrail_23 = format_WalkingTrail_23.readFeatures(json_WalkingTrail_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalkingTrail_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalkingTrail_23.addFeatures(features_WalkingTrail_23);
var lyr_WalkingTrail_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WalkingTrail_23, 
                style: style_WalkingTrail_23,
                popuplayertitle: 'Walking Trail',
                interactive: true,
                title: '<img src="styles/legend/WalkingTrail_23.png" /> Walking Trail'
            });
var group_CableRuns = new ol.layer.Group({
                                layers: [lyr_BoysBallField_15,lyr_GirlsBallField_16,lyr_WoodedTrail_17,lyr_EdwardsDrive_18,lyr_DixieParkingLot_19,lyr_DogtrotTrail_20,lyr_TennisCourts_21,lyr_AmpitheaterTrail_22,lyr_WalkingTrail_23,],
                                fold: 'close',
                                title: 'Cable Runs'});
var group_NetworkingEquipment = new ol.layer.Group({
                                layers: [lyr_Switches_14,],
                                fold: 'open',
                                title: 'Networking Equipment'});
var group_WifiBridges = new ol.layer.Group({
                                layers: [lyr_BridgeCoverage_11,lyr_SlaveBridges_12,lyr_MasterBridges_13,],
                                fold: 'open',
                                title: 'Wifi Bridges'});
var group_Cameras = new ol.layer.Group({
                                layers: [lyr_PTZCameras_8,lyr_IPCameras_9,lyr_180Cameras_10,],
                                fold: 'close',
                                title: 'Cameras'});

lyr_GoogleRoad_0.setVisible(true);lyr_TownHall_1.setVisible(true);lyr_ParkBoundary_2.setVisible(true);lyr_ParkingAreas_3.setVisible(true);lyr_ParkFeatures_4.setVisible(true);lyr_WalkingBikeTrail_5.setVisible(true);lyr_LampPosts_6.setVisible(true);lyr_ParkBuildings_7.setVisible(true);lyr_PTZCameras_8.setVisible(true);lyr_IPCameras_9.setVisible(true);lyr_180Cameras_10.setVisible(true);lyr_BridgeCoverage_11.setVisible(false);lyr_SlaveBridges_12.setVisible(true);lyr_MasterBridges_13.setVisible(true);lyr_Switches_14.setVisible(true);lyr_BoysBallField_15.setVisible(true);lyr_GirlsBallField_16.setVisible(true);lyr_WoodedTrail_17.setVisible(true);lyr_EdwardsDrive_18.setVisible(true);lyr_DixieParkingLot_19.setVisible(true);lyr_DogtrotTrail_20.setVisible(true);lyr_TennisCourts_21.setVisible(true);lyr_AmpitheaterTrail_22.setVisible(true);lyr_WalkingTrail_23.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_TownHall_1,lyr_ParkBoundary_2,lyr_ParkingAreas_3,lyr_ParkFeatures_4,lyr_WalkingBikeTrail_5,lyr_LampPosts_6,lyr_ParkBuildings_7,group_Cameras,group_WifiBridges,group_NetworkingEquipment,group_CableRuns];
lyr_TownHall_1.set('fieldAliases', {'id': 'id', });
lyr_ParkBoundary_2.set('fieldAliases', {'id': 'id', });
lyr_ParkingAreas_3.set('fieldAliases', {'id': 'id', });
lyr_ParkFeatures_4.set('fieldAliases', {'id': 'id', });
lyr_WalkingBikeTrail_5.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', 'time': 'time', });
lyr_LampPosts_6.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', 'time': 'time', });
lyr_ParkBuildings_7.set('fieldAliases', {'id': 'id', });
lyr_PTZCameras_8.set('fieldAliases', {'id': 'id', });
lyr_IPCameras_9.set('fieldAliases', {'id': 'id', });
lyr_180Cameras_10.set('fieldAliases', {'id': 'id', });
lyr_BridgeCoverage_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_SlaveBridges_12.set('fieldAliases', {'id': 'id', });
lyr_MasterBridges_13.set('fieldAliases', {'id': 'id', });
lyr_Switches_14.set('fieldAliases', {'id': 'id', 'Ports': 'Ports', });
lyr_BoysBallField_15.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_GirlsBallField_16.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_WoodedTrail_17.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_EdwardsDrive_18.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_DixieParkingLot_19.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_DogtrotTrail_20.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_TennisCourts_21.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_AmpitheaterTrail_22.set('fieldAliases', {'id': 'id', 'Length': 'Length', });
lyr_WalkingTrail_23.set('fieldAliases', {'id': 'id', 'Lgth': 'Lgth', });
lyr_TownHall_1.set('fieldImages', {'id': 'TextEdit', });
lyr_ParkBoundary_2.set('fieldImages', {'id': 'TextEdit', });
lyr_ParkingAreas_3.set('fieldImages', {'id': 'TextEdit', });
lyr_ParkFeatures_4.set('fieldImages', {'id': 'TextEdit', });
lyr_WalkingBikeTrail_5.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', 'time': '', });
lyr_LampPosts_6.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', 'time': '', });
lyr_ParkBuildings_7.set('fieldImages', {'id': '', });
lyr_PTZCameras_8.set('fieldImages', {'id': '', });
lyr_IPCameras_9.set('fieldImages', {'id': '', });
lyr_180Cameras_10.set('fieldImages', {'id': '', });
lyr_BridgeCoverage_11.set('fieldImages', {'id': '', 'Name': '', });
lyr_SlaveBridges_12.set('fieldImages', {'id': '', });
lyr_MasterBridges_13.set('fieldImages', {'id': '', });
lyr_Switches_14.set('fieldImages', {'id': '', 'Ports': '', });
lyr_BoysBallField_15.set('fieldImages', {'id': '', 'Length': '', });
lyr_GirlsBallField_16.set('fieldImages', {'id': '', 'Length': '', });
lyr_WoodedTrail_17.set('fieldImages', {'id': 'TextEdit', 'Length': 'TextEdit', });
lyr_EdwardsDrive_18.set('fieldImages', {'id': '', 'Length': '', });
lyr_DixieParkingLot_19.set('fieldImages', {'id': '', 'Length': '', });
lyr_DogtrotTrail_20.set('fieldImages', {'id': '', 'Length': '', });
lyr_TennisCourts_21.set('fieldImages', {'id': '', 'Length': '', });
lyr_AmpitheaterTrail_22.set('fieldImages', {'id': '', 'Length': '', });
lyr_WalkingTrail_23.set('fieldImages', {'id': '', 'Lgth': '', });
lyr_TownHall_1.set('fieldLabels', {'id': 'no label', });
lyr_ParkBoundary_2.set('fieldLabels', {'id': 'no label', });
lyr_ParkingAreas_3.set('fieldLabels', {'id': 'no label', });
lyr_ParkFeatures_4.set('fieldLabels', {'id': 'no label', });
lyr_WalkingBikeTrail_5.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', 'time': 'no label', });
lyr_LampPosts_6.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', 'time': 'no label', });
lyr_ParkBuildings_7.set('fieldLabels', {'id': 'no label', });
lyr_PTZCameras_8.set('fieldLabels', {'id': 'no label', });
lyr_IPCameras_9.set('fieldLabels', {'id': 'no label', });
lyr_180Cameras_10.set('fieldLabels', {'id': 'no label', });
lyr_BridgeCoverage_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_SlaveBridges_12.set('fieldLabels', {'id': 'no label', });
lyr_MasterBridges_13.set('fieldLabels', {'id': 'no label', });
lyr_Switches_14.set('fieldLabels', {'id': 'no label', 'Ports': 'no label', });
lyr_BoysBallField_15.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_GirlsBallField_16.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_WoodedTrail_17.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_EdwardsDrive_18.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_DixieParkingLot_19.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_DogtrotTrail_20.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_TennisCourts_21.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_AmpitheaterTrail_22.set('fieldLabels', {'id': 'no label', 'Length': 'no label', });
lyr_WalkingTrail_23.set('fieldLabels', {'id': 'no label', 'Lgth': 'no label', });
lyr_WalkingTrail_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});