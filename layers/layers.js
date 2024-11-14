var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Celltower_1 = new ol.format.GeoJSON();
var features_Celltower_1 = format_Celltower_1.readFeatures(json_Celltower_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Celltower_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Celltower_1.addFeatures(features_Celltower_1);
var lyr_Celltower_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Celltower_1, 
                style: style_Celltower_1,
                popuplayertitle: "Cell tower",
                interactive: true,
                title: '<img src="styles/legend/Celltower_1.png" /> Cell tower'
            });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_Buildings_3 = new ol.format.GeoJSON();
var features_Buildings_3 = format_Buildings_3.readFeatures(json_Buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_3.addFeatures(features_Buildings_3);
var lyr_Buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_3, 
                style: style_Buildings_3,
                popuplayertitle: "Buildings",
                interactive: true,
                title: '<img src="styles/legend/Buildings_3.png" /> Buildings'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Celltower_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_Buildings_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Celltower_1,lyr_Buffered_2,lyr_Buildings_3];
lyr_Celltower_1.set('fieldAliases', {'id': 'id', });
lyr_Buffered_2.set('fieldAliases', {'id': 'id', });
lyr_Buildings_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Celltower_1.set('fieldImages', {'id': '', });
lyr_Buffered_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Buildings_3.set('fieldImages', {'id': '', 'name': '', });
lyr_Celltower_1.set('fieldLabels', {'id': 'no label', });
lyr_Buffered_2.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_Buildings_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Buildings_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});