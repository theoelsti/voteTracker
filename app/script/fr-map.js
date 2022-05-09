

var map = new Datamap({
    element: document.getElementById('franceMap'),
    scope:"fra",
    geographyConfig: {
    dataJson: "script/fra.topo.json"
 },
setProjection: function(element) {
    var projection = d3.geo.mercator()
        .scale(2000)
        .center([2, 46.5])
        .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geo.path()
        .projection(projection);

    return {path: path, projection: projection};
}

});

