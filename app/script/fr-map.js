


var map = new Datamap({
    element: document.getElementById('franceMap'),
    scope:"fra",
    geographyConfig: {
    dataJson: "script/fra.topo.json",
    popupTemplate: function(geography, data) {
        return '<div class="hoverinfo"> <b>' + geography.properties.name + '</b> </br>E. Macron :  '+ data.voix1 + ' votes </br> M. LePen ' + data.voix2 + ' votes' +'</div>';
      }
 },
 data:{"FR.AI":{"voix1":166635,"voix2":136370,"fillKey":1},"FR.AS":{"voix1":102346,"voix2":152866,"fillKey":2},"FR.AL":{"voix1":86827,"voix2":78938,"fillKey":1},"FR.AP":{"voix1":41364,"voix2":43809,"fillKey":2},"FR.HA":{"voix1":42061,"voix2":34382,"fillKey":1},"FR.AM":{"voix1":261967,"voix2":260556,"fillKey":1},"FR.AH":{"voix1":90134,"voix2":81866,"fillKey":1},"FR.AN":{"voix1":54946,"voix2":71876,"fillKey":2},"FR.AG":{"voix1":39288,"voix2":37610,"fillKey":1},"FR.AB":{"voix1":68764,"voix2":73552,"fillKey":2},"FR.AD":{"voix1":85362,"voix2":103880,"fillKey":2},"FR.AV":{"voix1":89504,"voix2":59499,"fillKey":1},"FR.BD":{"voix1":438277,"voix2":422031,"fillKey":1},"FR.CV":{"voix1":218192,"voix2":143645,"fillKey":1},"FR.CL":{"voix1":44856,"voix2":35075,"fillKey":1},"FR.CT":{"voix1":95533,"voix2":77973,"fillKey":1},"FR.CM":{"voix1":201118,"voix2":155975,"fillKey":1},"FR.CH":{"voix1":77621,"voix2":70066,"fillKey":1},"FR.CZ":{"voix1":68171,"voix2":54028,"fillKey":1},"FR.CO":{"voix1":0,"voix2":0,"fillKey":0},"FR.CA":{"voix1":0,"voix2":0,"fillKey":0},"FR.CR":{"voix1":0,"voix2":0,"fillKey":0},"FR.DD":{"voix1":0,"voix2":0,"fillKey":0},"FR.DB":{"voix1":0,"voix2":0,"fillKey":0},"FR.DM":{"voix1":0,"voix2":0,"fillKey":0},"FR.EU":{"voix1":0,"voix2":0,"fillKey":0},"FR.EL":{"voix1":0,"voix2":0,"fillKey":0},"FR.FI":{"voix1":0,"voix2":0,"fillKey":0},"FR.GA":{"voix1":0,"voix2":0,"fillKey":0},"FR.HG":{"voix1":0,"voix2":0,"fillKey":0},"FR.GE":{"voix1":0,"voix2":0,"fillKey":0},"FR.GI":{"voix1":0,"voix2":0,"fillKey":0},"FR.HE":{"voix1":0,"voix2":0,"fillKey":0},"FR.IV":{"voix1":0,"voix2":0,"fillKey":0},"FR.IN":{"voix1":0,"voix2":0,"fillKey":0},"FR.IL":{"voix1":0,"voix2":0,"fillKey":0},"FR.IS":{"voix1":0,"voix2":0,"fillKey":0},"FR.JU":{"voix1":0,"voix2":0,"fillKey":0},"FR.LD":{"voix1":0,"voix2":0,"fillKey":0},"FR.LC":{"voix1":0,"voix2":0,"fillKey":0},"FR.LR":{"voix1":0,"voix2":0,"fillKey":0},"FR.HL":{"voix1":0,"voix2":0,"fillKey":0},"FR.LA":{"voix1":0,"voix2":0,"fillKey":0},"FR.LT":{"voix1":0,"voix2":0,"fillKey":0},"FR.LO":{"voix1":0,"voix2":0,"fillKey":0},"FR.LG":{"voix1":0,"voix2":0,"fillKey":0},"FR.LZ":{"voix1":0,"voix2":0,"fillKey":0},"FR.ML":{"voix1":0,"voix2":0,"fillKey":0},"FR.MH":{"voix1":0,"voix2":0,"fillKey":0},"FR.MR":{"voix1":0,"voix2":0,"fillKey":0},"FR.HM":{"voix1":0,"voix2":0,"fillKey":0},"FR.MY":{"voix1":0,"voix2":0,"fillKey":0},"FR.MM":{"voix1":0,"voix2":0,"fillKey":0},"FR.MS":{"voix1":0,"voix2":0,"fillKey":0},"FR.MB":{"voix1":0,"voix2":0,"fillKey":0},"FR.MO":{"voix1":0,"voix2":0,"fillKey":0},"FR.NI":{"voix1":0,"voix2":0,"fillKey":0},"FR.NO":{"voix1":0,"voix2":0,"fillKey":0},"FR.OI":{"voix1":0,"voix2":0,"fillKey":0},"FR.OR":{"voix1":0,"voix2":0,"fillKey":0},"FR.PC":{"voix1":0,"voix2":0,"fillKey":0},"FR.PD":{"voix1":0,"voix2":0,"fillKey":0},"FR.PA":{"voix1":0,"voix2":0,"fillKey":0},"FR.HP":{"voix1":0,"voix2":0,"fillKey":0},"FR.PO":{"voix1":0,"voix2":0,"fillKey":0},"FR.BR":{"voix1":0,"voix2":0,"fillKey":0},"FR.HR":{"voix1":0,"voix2":0,"fillKey":0},"FR.RH":{"voix1":0,"voix2":0,"fillKey":0},"FR.HN":{"voix1":0,"voix2":0,"fillKey":0},"FR.SL":{"voix1":0,"voix2":0,"fillKey":0},"FR.ST":{"voix1":0,"voix2":0,"fillKey":0},"FR.SV":{"voix1":0,"voix2":0,"fillKey":0},"FR.HS":{"voix1":0,"voix2":0,"fillKey":0},"FR.VP":{"voix1":0,"voix2":0,"fillKey":0},"FR.SM":{"voix1":0,"voix2":0,"fillKey":0},"FR.SE":{"voix1":0,"voix2":0,"fillKey":0},"FR.YV":{"voix1":0,"voix2":0,"fillKey":0},"FR.DS":{"voix1":0,"voix2":0,"fillKey":0},"FR.SO":{"voix1":0,"voix2":0,"fillKey":0},"FR.TA":{"voix1":0,"voix2":0,"fillKey":0},"FR.TG":{"voix1":0,"voix2":0,"fillKey":0},"FR.VR":{"voix1":0,"voix2":0,"fillKey":0},"FR.VC":{"voix1":0,"voix2":0,"fillKey":0},"FR.VD":{"voix1":0,"voix2":0,"fillKey":0},"FR.VN":{"voix1":0,"voix2":0,"fillKey":0},"FR.HV":{"voix1":0,"voix2":0,"fillKey":0},"FR.VG":{"voix1":0,"voix2":0,"fillKey":0},"FR.YO":{"voix1":0,"voix2":0,"fillKey":0},"FR.TB":{"voix1":0,"voix2":0,"fillKey":0},"FR.ES":{"voix1":0,"voix2":0,"fillKey":0},"FR.HD":{"voix1":0,"voix2":0,"fillKey":0},"FR.SS":{"voix1":0,"voix2":0,"fillKey":0},"FR.VM":{"voix1":0,"voix2":0,"fillKey":0},"FR.VO":{"voix1":0,"voix2":0,"fillKey":0}},
 
 fills: {
    '1': '#f4575c',
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


