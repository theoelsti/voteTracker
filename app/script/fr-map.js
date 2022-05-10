


var map = new Datamap({
    element: document.getElementById('franceMap'),
    scope:"fra",
    geographyConfig: {
    dataJson: "script/fra.topo.json",
    popupTemplate: function(geography, data) {
        return '<div class="hoverinfo"> <b>' + geography.properties.name + '</b> </br>E. Macron :  '+ data.voix1 + ' votes </br> M. LePen ' + data.voix2 + ' votes' +'</div>';
      }
 },
data:{"FR.AI":{"voix1":166635,"voix2":136370,"fillKey":1},"FR.AS":{"voix1":268981,"voix2":289236,"fillKey":2},"FR.AL":{"voix1":355808,"voix2":368174,"fillKey":2},"FR.AP":{"voix1":397172,"voix2":411983,"fillKey":2},"FR.AM":{"voix1":439233,"voix2":446365,"fillKey":2},"FR.AH":{"voix1":701200,"voix2":706921,"fillKey":2},"FR.AN":{"voix1":791334,"voix2":788787,"fillKey":1},"FR.AG":{"voix1":846280,"voix2":860663,"fillKey":2},"FR.AB":{"voix1":885568,"voix2":898273,"fillKey":2},"FR.AD":{"voix1":954332,"voix2":971825,"fillKey":2},"FR.AV":{"voix1":1039694,"voix2":1075705,"fillKey":2},"FR.BR":{"voix1":1129198,"voix2":1135204,"fillKey":2},"FR.BD":{"voix1":1567475,"voix2":1557235,"fillKey":1},"FR.CV":{"voix1":1785667,"voix2":1700880,"fillKey":1},"FR.CL":{"voix1":1830523,"voix2":1735955,"fillKey":1},"FR.CT":{"voix1":1926056,"voix2":1813928,"fillKey":1},"FR.CM":{"voix1":2127174,"voix2":1969903,"fillKey":1},"FR.CH":{"voix1":2204795,"voix2":2039969,"fillKey":1},"FR.CZ":{"voix1":2272966,"voix2":2093997,"fillKey":1}},

 fills: {
    '1': '#0391e3',
    '2': '#022598',
    defaultFill: '#b5caf9'
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
// fetch("data/dpts-clean.json")
// .then(res => res.json())
// .then(out => map.data = out)
// .then(() => map.updateChoropleth(map.data));


