import {
  Polygons_shape, Poly_pos, Poly_nam, Polygons_shape_lnk, Poly_class,
  edge_col, fill_col, Line_W
} from "./Polygons.js";

let Layer_502,map_502;

/** 表示するマーカーの名前、緯度経度 */
const marks = await (await fetch("./yokohama-refuges.json")).json();

function init() {

  let load=document.getElementById('loading');
  load.style.display='none';

  Layer_502 = new Array();
  map_502 = L.map('map_502',{maxBounds: [[35.595117671993066, 139.46526938853586], [35.30817425882817, 139.73924092638254]]}).setView([35.430853497716456, 139.6142753630236], 13);
  const mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; ' + mapLink,
      maxZoom: 18,minZoom: 12
    }
  ).addTo(map_502);
}

let mark = [];
function disp(id){
  if(id != 3){
    for (let i = 0; i < (Poly_pos.length);i++){
      if (Poly_pos[ i ] != null){
        Polygons_shape[ i ] = L.polygon([ Poly_pos[ i ] ],
        { color: "#" + edge_col[ i ],
            fillColor: "#" + fill_col[ i ],
            weight: Line_W,
            fillopacity: 0.5
        });
        if(Poly_class[i] === id){
          Polygons_shape[ i ].bindPopup(Poly_nam[ i ] + "<br>" + Polygons_shape_lnk[ i ]);
          Layer_502[ i ] = Polygons_shape[ i ];
          Layer_502[ i ].addTo(map_502);
        }
      }
    }
  }else{
    //避難所
    const redIcon = L.icon({
      iconUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-icon.png",
      iconRetinaUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-icon-2x.png",
      shadowUrl: "https://esm.sh/leaflet@1.9.2/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
      className: "icon-red",
    });
    
    for (const m of marks) {
      const pos = [m.lat, m.lng];
      mark.push(L.marker(pos, {icon:redIcon}).bindPopup(m.name).addTo(map_502));
    }
  }
}
function hidden(id){
  if(id != 3){
    for(let i = 0;i < Poly_pos.length;i++){
      if(Poly_class[i] === id){
        map_502.removeLayer(Layer_502[i]);
      }
    }
  }else{
    for(let i = marks.length - 1;i >= 0;i--){
        map_502.removeLayer(mark[i]);
        mark.pop();
    }
  }
}
function onClicked(id){
  const obj = document.getElementById(id);
  if(obj.checked){
    switch(id){
      case "TAB-02":
        disp(0);
        break;
      case "TAB-01":
        disp(1);
        disp(2);
        break;
      case "TAB-03":
        disp(3);
        break;
    }
  }else{
    switch(id){
      case "TAB-02":
        hidden(0);
        break;
      case "TAB-01":
        hidden(1);
        hidden(2);
        break;
      case "TAB-03":
        hidden(3);
        break;
    }
  }
}
for (const id of ["TAB-01", "TAB-02", "TAB-03"]) {
  document.getElementById(id).onclick = () => onClicked(id);
}

function click_get_position(map){
  const imageUrl = "dosya.png";
  let imageOverlay = null;
  let imageVisible = true;
  let adjustedWidth =  10;
  let adjustedHeight = 10;
  let imageBounds = [
    [map.getCenter().lat - adjustedHeight / 2, map.getCenter().lng - adjustedWidth / 2],
    [map.getCenter().lat + adjustedHeight / 2, map.getCenter().lng + adjustedWidth / 2]
  ];
  // 画像を地図に合わせて表示
  const imageBoundss=[[35.40528, 139.5677],[35.4483, 139.64164]]
  imageOverlay = L.imageOverlay(imageUrl, imageBoundss, {
    opacity: 0.6
  }).addTo(map);
  
  // マーカーの状態
  let polygon=[];
  let polygons=[];
  let positions=[];
  let positionss=[];
  let colors=[];
  let markers=[];
  
  map.on('click',function (e){
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    map.removeLayer(polygon);
    positions.push([lat,lng]);
    polygon=L.polygon(positions,{color: 'green'}).addTo(map);
  });
  
  document.addEventListener('keydown', keypress_ivent);
  function keypress_ivent(e) {
    if(e.key === 'x' && (markers.length > 0 || polygon != null)){
      map.removeLayer(polygon);
      markers.pop();
      positions.pop();
      polygon=L.polygon(positions,{color: 'green'}).addTo(map);
    }else if((e.key === 'r' || e.key === 'y') && positions.length > 0){
      positionss.push(positions);
      map.removeLayer(polygon);
      if (e.key ==='r'){
        colors.push(2);
        polygons.push(L.polygon(positions,{color: 'purple'}).addTo(map));
      }else{
        colors.push(1);
        polygons.push(L.polygon(positions,{color: 'blue'}).addTo(map));
      }
      polygon=[];
      positions=[];
    }else if(e.key === 'Enter' && positionss.length > 0){
      let s="";
      for(let i=0;i<positionss.length;i++){
        s+="Poly_pos[ ;"+"; + "+String(i+1)+ " ] = "+JSON.stringify(positionss[i])+";"
        s+="Poly_class[ ;"+"; + "+String(i+1)+ " ] = "+ colors[i] +";"
      }
      console.log(s)
    }else if(e.key === 'q' && colors.length > 0 && positions.length == 0){
      map.removeLayer(polygons[polygons.length-1]);
      positionss.pop();
      polygons.pop();
      colors.pop();
    }else if (e.key === 'p') {
      if (imageOverlay) {
        if (imageVisible) {
          map.removeLayer(imageOverlay);
          imageVisible = false;
        } else {
          imageOverlay.addTo(map);
          imageVisible = true;
        }
      }
    }else if(e.key === "g"){
      document.removeEventListener('keydown', keypress_ivent);
      map.removeLayer(polygon);
      map.off("click");
      map.removeLayer(imageOverlay);
      for(let i = 0;i < polygons.length;i++)map.removeLayer(polygons[i]);
      polygon = [];
      positions = [];
      colors = [];
      positionss = [];
      polygons = [];
    }
  }
}

let debug = true;
document.addEventListener('keypress', function (e){
  if(e.key === "g"){
    if(debug){
      click_get_position(map_502);
    }
    debug = !debug;
  }
});

setTimeout(init,750);
