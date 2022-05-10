


var map = new Datamap({
    element: document.getElementById('franceMap'),
    scope:"fra",
    geographyConfig: {
    dataJson: "script/fra.topo.json",
    popupTemplate: function(geography, data) {
        return '<div class="hoverinfo"> <b>' + geography.properties.name + '</b> </br>E. Macron :  '+ data.voix1 + ' votes </br> M. LePen ' + data.voix2 + ' votes' +'</div>';
      }
 },
 data:{"FR.AI":{"voix1":166635,"voix2":136370,"fillKey":1},"FR.AS":{"voix1":102346,"voix2":152866,"fillKey":2},"FR.AL":{"voix1":86827,"voix2":78938,"fillKey":1},"FR.AP":{"voix1":41364,"voix2":43809,"fillKey":2},"FR.HA":{"voix1":42061,"voix2":34382,"fillKey":1},"FR.AM":{"voix1":261967,"voix2":260556,"fillKey":1},"FR.AH":{"voix1":90134,"voix2":81866,"fillKey":1},"FR.AN":{"voix1":54946,"voix2":71876,"fillKey":2},"FR.AG":{"voix1":39288,"voix2":37610,"fillKey":1},"FR.AB":{"voix1":68764,"voix2":73552,"fillKey":2},"FR.AD":{"voix1":85362,"voix2":103880,"fillKey":2},"FR.AV":{"voix1":89504,"voix2":59499,"fillKey":1},"FR.BD":{"voix1":438277,"voix2":422031,"fillKey":1},"FR.CV":{"voix1":218192,"voix2":143645,"fillKey":1},"FR.CL":{"voix1":44856,"voix2":35075,"fillKey":1},"FR.CT":{"voix1":95533,"voix2":77973,"fillKey":1},"FR.CM":{"voix1":201118,"voix2":155975,"fillKey":1},"FR.CH":{"voix1":77621,"voix2":70066,"fillKey":1},"FR.CZ":{"voix1":68171,"voix2":54028,"fillKey":1},"FR.CO":{"voix1":144425,"voix2":107758,"fillKey":1},"FR.CA":{"voix1":209681,"voix2":123651,"fillKey":1},"FR.CR":{"voix1":30224,"voix2":27815,"fillKey":1},"FR.DD":{"voix1":111322,"voix2":104759,"fillKey":1},"FR.DB":{"voix1":141844,"voix2":106276,"fillKey":1},"FR.DM":{"voix1":143551,"voix2":114110,"fillKey":1},"FR.EU":{"voix1":146692,"voix2":154971,"fillKey":2},"FR.EL":{"voix1":109123,"voix2":95632,"fillKey":1},"FR.FI":{"voix1":332107,"voix2":159816,"fillKey":1},"FR.GA":{"voix1":177509,"voix2":193510,"fillKey":2},"FR.HG":{"voix1":409901,"voix2":226427,"fillKey":1},"FR.GE":{"voix1":56905,"voix2":45302,"fillKey":1},"FR.GI":{"voix1":484347,"voix2":304491,"fillKey":1},"FR.HE":{"voix1":296875,"voix2":267421,"fillKey":1},"FR.IV":{"voix1":387109,"voix2":159165,"fillKey":1},"FR.IN":{"voix1":57166,"voix2":54073,"fillKey":1},"FR.IL":{"voix1":188956,"voix2":112439,"fillKey":1},"FR.IS":{"voix1":358311,"voix2":239955,"fillKey":1},"FR.JU":{"voix1":68651,"voix2":60618,"fillKey":1},"FR.LD":{"voix1":126978,"voix2":97620,"fillKey":1},"FR.LC":{"voix1":91313,"voix2":78370,"fillKey":1},"FR.LR":{"voix1":194773,"voix2":149014,"fillKey":1},"FR.HL":{"voix1":62324,"voix2":61914,"fillKey":1},"FR.LA":{"voix1":504599,"voix2":221531,"fillKey":1},"FR.LT":{"voix1":180824,"voix2":133269,"fillKey":1},"FR.LO":{"voix1":54966,"voix2":37924,"fillKey":1},"FR.LG":{"voix1":74520,"voix2":78633,"fillKey":2},"FR.LZ":{"voix1":22016,"voix2":18591,"fillKey":1},"FR.ML":{"voix1":274096,"voix2":137532,"fillKey":1},"FR.MH":{"voix1":157999,"voix2":107680,"fillKey":1},"FR.MR":{"voix1":136019,"voix2":125026,"fillKey":1},"FR.HM":{"voix1":38157,"voix2":50474,"fillKey":2},"FR.MY":{"voix1":101489,"voix2":56634,"fillKey":1},"FR.MM":{"voix1":179185,"voix2":150043,"fillKey":1},"FR.MS":{"voix1":41866,"voix2":52412,"fillKey":2},"FR.MB":{"voix1":268497,"voix2":158800,"fillKey":1},"FR.MO":{"voix1":249526,"voix2":244952,"fillKey":1},"FR.NI":{"voix1":50662,"voix2":50882,"fillKey":2},"FR.NO":{"voix1":633910,"voix2":565605,"fillKey":1},"FR.OI":{"voix1":182705,"voix2":203627,"fillKey":2},"FR.OR":{"voix1":73233,"voix2":61239,"fillKey":1},"FR.PC":{"voix1":323411,"voix2":437940,"fillKey":2},"FR.PD":{"voix1":187960,"voix2":124188,"fillKey":1},"FR.PA":{"voix1":219693,"voix2":128738,"fillKey":1},"FR.HP":{"voix1":64998,"voix2":52086,"fillKey":1},"FR.PO":{"voix1":106167,"voix2":136892,"fillKey":2},"FR.BR":{"voix1":319209,"voix2":222316,"fillKey":1},"FR.HR":{"voix1":191591,"voix2":170558,"fillKey":1},"FR.RH":{"voix1":551446,"voix2":251581,"fillKey":1},"FR.HN":{"voix1":53519,"voix2":70596,"fillKey":2},"FR.SL":{"voix1":144758,"voix2":126616,"fillKey":1},"FR.ST":{"voix1":154316,"voix2":124295,"fillKey":1},"FR.SV":{"voix1":125645,"voix2":92425,"fillKey":1},"FR.HS":{"voix1":237162,"voix2":147259,"fillKey":1},"FR.VP":{"voix1":0,"voix2":0,"fillKey":0},"FR.SM":{"voix1":331739,"voix2":268343,"fillKey":1},"FR.SE":{"voix1":329308,"voix2":248791,"fillKey":1},"FR.YV":{"voix1":463886,"voix2":188711,"fillKey":1},"FR.DS":{"voix1":117530,"voix2":71600,"fillKey":1},"FR.SO":{"voix1":135581,"voix2":141118,"fillKey":2},"FR.TA":{"voix1":106683,"voix2":94364,"fillKey":1},"FR.TG":{"voix1":62331,"voix2":67594,"fillKey":2},"FR.VR":{"voix1":251966,"voix2":309320,"fillKey":2},"FR.VC":{"voix1":133790,"voix2":144788,"fillKey":2},"FR.VD":{"voix1":243389,"voix2":149818,"fillKey":1},"FR.VN":{"voix1":124962,"voix2":82881,"fillKey":1},"FR.HV":{"voix1":101414,"voix2":70041,"fillKey":1},"FR.VG":{"voix1":91527,"voix2":100827,"fillKey":2},"FR.YO":{"voix1":77995,"voix2":83152,"fillKey":2},"FR.TB":{"voix1":31691,"voix2":29890,"fillKey":1},"FR.ES":{"voix1":338491,"voix2":178813,"fillKey":1},"FR.HD":{"voix1":528570,"voix2":128975,"fillKey":1},"FR.SS":{"voix1":314370,"voix2":112902,"fillKey":1},"FR.VM":{"voix1":375011,"voix2":128047,"fillKey":1},"FR.VO":{"voix1":299535,"voix2":153221,"fillKey":1}},
 
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


