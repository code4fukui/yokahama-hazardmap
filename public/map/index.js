function init() {
  var Layer_502 = new Array();
  var map_502 = L.map('map_502').setView([35.42361899347166, 139.6023174337535], 16);
  mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; ' + mapLink,
      maxZoom: 18
          }).addTo(map_502);
  Polygon();


function Polygon(){
  const Polygons_shape = new Array();
  const Poly_pos = new Array();
  const Poly_nam = new Array();
  const Polygons_shape_lnk = new Array();
  const edge_col = new Array();
  const Polygons_fillcolor = new Array();
  const Line_W = 2;

  Poly_pos[ 0 ] = [
      [35.419213, 139.5977589],
      [35.419213, 139.5977589],
      [35.419213, 139.5977589],
      [35.419628, 139.598197],
      [35.4191981, 139.5984126],
      [35.4194622, 139.5986164],
      [35.4190029, 139.5998846],
      [35.4183205, 139.6002201],
      [35.4184467, 139.6008824],
      [35.417847285462614, 139.60077746701705],
      [35.41779492928873, 139.600714434345],
      [35.41721999694271, 139.60106353838532],
      [35.41765070266258, 139.60152658610923],
      [35.41810906584116, 139.60141749109613],
      [35.41846469066398, 139.60095686770737],
      [35.41885587613935, 139.60060776366547],
      [35.41943474817713, 139.60149022106896],
      [35.419513774747465, 139.60122839303753],
      [35.419691584247296, 139.60134476105148],
      [35.420094617660716, 139.60137870172224],
      [35.420090666362526, 139.60165022708816],
      [35.421991346863834, 139.60190141350455],
      [35.4219238280193, 139.60255964879553],
      [35.42212638438316, 139.6021315657042],
      [35.422651528166995, 139.6019520469956],
      [35.423919361126885, 139.60245838183482],
      [35.423844341980534, 139.60302915928995],
      [35.42412941436493, 139.603001541026],
      [35.42426444832315, 139.60260567926355],
      [35.42444824414899, 139.60272535840735],
      [35.42446324787136, 139.602969319739],
      [35.42470330704923, 139.6028450375512],
      [35.42469205429124, 139.60340660891833],
      [35.42487960005232, 139.60325470846655],
      [35.42503144274411, 139.60299526761773]
  ];
  edge_col[ 0 ] = "FFFF00";
  Polygons_fillcolor[ 0 ] = "FFFF00";
  Poly_nam[ 0 ] = "Polygons Sample #001";
  Polygons_shape_lnk[ 0 ] = "  ";

  Poly_pos[ 1 ] = [ 
    [ 34.5, 138.0 ],
    [ 34.4, 139.0 ],
    [ 35.0, 139.5 ],
    [ 35.0, 138.5 ],
    ];
edge_col[ 1 ] = "FF0000";
Polygons_fillcolor[ 1 ] = "FF0000";
Poly_nam[ 1 ] = "red";
Polygons_shape_lnk[ 1 ] = "";

Poly_pos[ 2 ] = [
  [35.437159, 139.636296],
  [35.438121, 139.635287],
  [35.438470, 139.635674],
  [35.439868, 139.634771],
  [35.439886, 139.633719],
  [35.440603, 139.632925],
  [35.439746, 139.630800],
  [35.439431, 139.631122],
  [35.439379, 139.630821],
  [35.439694, 139.630542],
  [35.439187, 139.629319],
  [35.438959, 139.629383],
  [35.438872, 139.629276],
  [35.438575, 139.628911],
  [35.438714, 139.628868],
  [35.438977, 139.629083],
  [35.438120, 139.626807],
  [35.437788, 139.626764],
  [35.437560, 139.626335],
  [35.437718, 139.626163],
  [35.437910, 139.626400],
  [35.437316, 139.625155],
  [35.437228, 139.625069],
  [35.436669, 139.625240],
  [35.436634, 139.625133],
  [35.436774, 139.624983],
  [35.436721, 139.624897],
  [35.436459, 139.624811],
  [35.436319, 139.624446],
  [35.436774, 139.624511],
  [35.437001, 139.624232],
  [35.436704, 139.624103],
  [35.437123, 139.623931],
  [35.436546, 139.623633],
  [35.433102, 139.622173],
  [35.432962, 139.622388],
  [35.431563, 139.621615],
  [35.431423, 139.622109],
  [35.431633, 139.622345],
  [35.432140, 139.623333],
  [35.432717, 139.623590]
];
edge_col[ 2 ] = "FFFF00";
Polygons_fillcolor[ 2 ] = "FFFF00";
Poly_nam[ 2 ] = "Polygons Sample #001";
Polygons_shape_lnk[ 2 ] = "  ";

  for (i = 0; i <= (Poly_pos.length - 1);i++){
  if (Poly_pos[ i ] != null){
      Polygons_shape[ i ] = L.polygon([ Poly_pos[ i ] ],
      { color: "#" + edge_col[ i ],
          fillColor: "#" + Polygons_fillcolor[ i ],
          weight: Line_W,
          fillopacity: 0.5
      });
      Polygons_shape[ i ].bindPopup(Poly_nam[ i ] + "<br>" + Polygons_shape_lnk[ i ]);
      Layer_502[ i ] = Polygons_shape[ i ];
      Layer_502[ i ].addTo(map_502);
  }
  }
}}