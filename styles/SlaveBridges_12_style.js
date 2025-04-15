var size = 0;
var placement = 'point';

var style_SlaveBridges_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("id") !== null) {
        labelText = String(feature.get("id"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(61,128,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(255,176,74,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
