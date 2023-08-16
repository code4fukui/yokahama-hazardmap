function init() {
  var Layer_502 = new Array();
  var map_502 = L.map('map_502',{maxBounds: [[35.595117671993066, 139.46526938853586], [35.30817425882817, 139.73924092638254]]}).setView([35.430853497716456, 139.6142753630236], 16);
    mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; ' + mapLink,
      maxZoom: 18,minZoom: 12
          }).addTo(map_502);
  Polygon();
  click_get_position(map_502);
  
  function Polygon(){
    /** 実際に表示するポリゴンデータの配列 **/
    const Polygons_shape = new Array();

    /** 表示するポリゴンの緯度経度 */
    const Poly_pos = new Array();

    /** 吹き出しの文言 */
    const Poly_nam = new Array();

    /** 吹き出しのリンクがあればここに */
    const Polygons_shape_lnk = new Array();

    /** 枠線の色 */
    const edge_col = new Array();

    /** ポリゴンの塗りつぶしの色 */
    const fill_col = new Array();

    /** 枠線の幅 */
    const Line_W = 2;

    Poly_pos[ 0 ] = [
        [35.43518798495131,139.61048126220706],
        [35.43388111203584,139.6107602119446],
        [35.433837403545006,139.6113181114197],
        [35.43392044965729,139.61146831512454],
        [35.43359700642137,139.6118009090424],
        [35.43348773476429,139.6116775274277],
        [35.433732503070225,139.6113717556],
        [35.433369721208074,139.61080849170688],
        [35.43360574814754,139.61036860942843],
        [35.43430508316558,139.6088129281998],
        [35.43465474839695,139.6085608005524],
        [35.43436190386901,139.60828185081485],
        [35.434549848987,139.6080565452576],
        [35.43406905827602,139.6068334579468],
        [35.434309453990366,139.60668325424197],
        [35.43459355709108,139.6056640148163],
        [35.43423077910831,139.60527241230014],
        [35.43361011901026,139.60540115833285],
        [35.433583893830345,139.605068564415],
        [35.433190515106816,139.6040385961533],
        [35.43280587627453,139.60370600223544],
        [35.43265726532452,139.6040761470795],
        [35.43380243673525,139.60654914379123],
        [35.43368005278159,139.60669398307803],
        [35.43267037806643,139.6044570207596],
        [35.43312495179938,139.60623264312747],
        [35.4329938250244,139.60631847381595],
        [35.43263541074993,139.60562109947207],
        [35.432438719311605,139.60551381111148],
        [35.4323294460827,139.60427999496463],
        [35.43204096404598,139.60544943809512],
        [35.431804932519974,139.6044570207596],
        [35.431446512953855,139.60429608821872],
        [35.43152956153192,139.6033197641373],
        [35.43107060779262,139.60355043411258],
        [35.430970074719525,139.60244536399844],
        [35.43055919911624,139.602187871933],
        [35.430192031909876,139.60266530513766],
        [35.4301570635172,139.60311591625216],
        [35.42962816472644,139.60292816162112],
        [35.42971121517967,139.60261166095736],
        [35.42942272376363,139.60241317749026],
        [35.429151715734456,139.6020215749741],
        [35.429326559728636,139.6016085147858],
        [35.42784037367883,139.6002566814423],
        [35.427193437066464,139.60059463977817],
        [35.42680876959025,139.5999884605408],
        [35.42695739133292,139.59921061992648],
        [35.42640224401071,139.59978461265567],
        [35.42480672056307,139.5996826887131],
        [35.42460563865314,139.60019767284396],
        [35.42394993328573,139.59992945194247],
        [35.42401987544589,139.59945738315585],
        [35.423298594003064,139.59905505180362],
        [35.42312373692309,139.5989799499512],
        [35.42155000612323,139.59887802600863],
        [35.42146257573293,139.59852397441867],
        [35.42103853699375,139.59815919399264],
        [35.42057515190181,139.59810554981235],
        [35.420347829938834,139.59842741489413],
        [35.42023416871682,139.59801435470584],
        [35.4203390867736,139.5980250835419],
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
        [35.42503144274411, 139.60299526761773],
        [35.42484206550846, 139.60290327587902],
        [35.424834174780656, 139.60322282612927],
        [35.42518136607323, 139.60348427633406],
        [35.42528789037433, 139.60377477656158],
        [35.42558773582849, 139.60345522632477],
        [35.42541414124507, 139.60392002668883],
        [35.42558773582849, 139.60409432682533],
        [35.426114338810386, 139.60447761900767],
        [35.426101225001204, 139.60470292456276],
        [35.42629793191433, 139.6047887552504],
        [35.425974458069334, 139.60518572218078],
        [35.42678125006656, 139.60634199566286],
        [35.4269472539376, 139.60601278138975],
        [35.42702295159467, 139.6063126597401],
        [35.42717567471031, 139.60632243838185],
        [35.42878264765328, 139.60844300808648],
        [35.42913670796318, 139.60820160927747],
        [35.42912359464613, 139.60895799221237],
        [35.42958693055839, 139.60899017872356],
        [35.42952136431829, 139.6092476707865],
        [35.4296743521288, 139.60944615425169],
        [35.429906018831424, 139.60926376404043],
        [35.430571426722786, 139.61028812826763],
        [35.429801740744125, 139.61118437620584],
        [35.430645786238095, 139.61042497210892],
        [35.43093987577663, 139.61134679487554],
        [35.43077281512323, 139.6116813154853],
        [35.43067609563919, 139.61163815153566],
        [35.430728851735786, 139.61183238930903],
        [35.43055189730333, 139.61203840081433],
        [35.43091906285835, 139.61260166469543],
        [35.43055626833174, 139.61299863157237],
        [35.43080541655833, 139.61320247944278],
        [35.43048633184887, 139.61362626843655],
        [35.43070051214595, 139.61381402310633],
        [35.43050381598541, 139.61388912495335],
        [35.43051692907772, 139.61407151515317],
        [35.430905949845155, 139.6141358881649],
        [35.430853497716456, 139.6142753630236],
        [35.430652430906626, 139.61445775322343],
        [35.4308097875831, 139.614779618282],
        [35.43060872066415, 139.61490836430542],
        [35.43083164265274, 139.6149512796466],
        [35.43087098176315, 139.61572375578712],
        [35.43070488316627, 139.6157988576341],
        [35.43057375245892, 139.61613681607682],
        [35.43103191388634, 139.6162108625863],
        [35.43114027121673, 139.61702922703475],
        [35.43104441666268, 139.61717244081325],
        [35.43117777948941, 139.61735657281417],
        [35.43114860638995, 139.6176327708155],
        [35.430944394397685, 139.6177452959272],
        [35.431306974517234, 139.61785270626103],
        [35.431461174762966, 139.61816982248482],
        [35.431336147563385, 139.6180726419325],
        [35.43130280694297, 139.61788339515383],
        [35.43106942221356, 139.61831815126706],
        [35.43110276293061, 139.61862503793523],
        [35.43141212894536, 139.61860649757546],
        [35.431427427379965, 139.61885661359614],
        [35.43127881388895, 139.61891562219023],
        [35.431449282281974, 139.619414513031],
        [35.43134000771258, 139.61967200507786],
        [35.431492992068215, 139.62011725174216],
        [35.43163723419449, 139.61969882716605],
        [35.4317771051005, 139.61963445415435],
        [35.431733395468456, 139.6206590579241],
        [35.431593524486544, 139.62065369350645],
        [35.431680943878696, 139.621200864106],//
        [35.432507052448926, 139.62158173775862],
        [35.431969427199746, 139.6211364910943],
        [35.43208744280587, 139.62049812539482],
        [35.43234532815808, 139.62029427752444],
        [35.432660944806614, 139.6214886226655],
        [35.433024400902816, 139.62156487813408],
        [35.43334276135604, 139.62110903119913],
        [35.43350194111065, 139.62198816457365],
        [35.43332949636229, 139.62240059751483],
        [35.43134414428915, 139.6214780502993],
        [35.43108768099081, 139.62185792274508],
        [35.43114958599967, 139.6226339478843],
        [35.431220334522955, 139.62242230466452],
        [35.43154312387172, 139.62246571865833],
        [35.43133087896616, 139.6226448013828],
        [35.43136183138304, 139.62280760385957],
        [35.43168296200646, 139.62288764841065],
        [35.431481376742035, 139.6231270440351],
        [35.43161168948539, 139.6234280896121],
        [35.43224791927879, 139.6233528282216],
        [35.43232840582021, 139.62368209682145],
        [35.43275383334561, 139.6235597970558],
        [35.43277299669475, 139.62398784623556],
        [35.43262352245048, 139.62412425751265],
        [35.43283431940514, 139.6241477768438],
        [35.432918638022954, 139.62506502508617],
        [35.432750000699, 139.6251826210147],
        [35.432979960598665, 139.6252202517118],
        [35.433313401286725, 139.62653262227394],
        [35.43304894844375, 139.62668784909934],
        [35.433416882602046, 139.62784499303586],
        [35.43304894844375, 139.62822130000708],
        [35.4343520410209, 139.62940666696642],
        [35.435271858401975, 139.62886102201372],
        [35.43553247140971, 139.62976415874462],
        [35.43499591429791, 139.6300369812988],
        [35.43539449992245, 139.6303192115272],
        [35.43519520735681, 139.63068611082414],
        [35.43458966153483, 139.63083663361263],
        [35.434957588653106, 139.63178680871496],
        [35.43530251879962, 139.63205022359483],
        [35.43494225839008, 139.6324547535889],
        [35.43510322600631, 139.63286869125724],
        [35.435379169742625, 139.63257705335454],
        [35.435425160273375, 139.6329345449772],
        [35.43612268010294, 139.63256764568024],
        [35.43621466031084, 139.63288750667436],
        [35.43676653921963, 139.63238889993752],
        [35.43710762916615, 139.63312269856945]
    ];
    edge_col[ 0 ] = "FFFF00";
    fill_col[ 0 ] = "FFFF00";
    Poly_nam[ 0 ] = "Yellow";
    Polygons_shape_lnk[ 0 ] = "";

    Poly_pos[ 1 ] = [ 
                [ 34.5, 138.0 ],
                [ 34.4, 139.0 ],
                [ 35.0, 139.5 ],
                [ 35.0, 138.5 ],
                ];
    edge_col[ 1 ] = "FF0000";
    fill_col[ 1 ] = "FF0000";
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
    fill_col[ 2 ] = "FFFF00";
    Poly_nam[ 2 ] = "";
    Polygons_shape_lnk[ 2 ] = "";
    
    Poly_pos[ 3 ] = [
      [35.441599,139.632753],
      [35.443173,139.635329],
      [35.444886,139.632517],
      [35.443330,139.628761],
      [35.442211,139.627580],
      [35.441241,139.626571],
      [35.440035,139.625112],
      [35.439354,139.623996],
      [35.438847,139.623008],
      [35.437082,139.623287],
      [35.440891,139.632560]
    ];
    edge_col[ 3 ] = "FFFF00";
    fill_col[ 3 ] = "FFFF00";
    Poly_nam[ 3 ] = "";
    Polygons_shape_lnk[ 3 ] = "  ";
    
    for (i = 0; i <= (Poly_pos.length - 1);i++){
    if (Poly_pos[ i ] != null){
        Polygons_shape[ i ] = L.polygon([ Poly_pos[ i ] ],
        { color: "#" + edge_col[ i ],
            fillColor: "#" + fill_col[ i ],
            weight: Line_W,
            fillopacity: 0.5
        });
        Polygons_shape[ i ].bindPopup(Poly_nam[ i ] + "<br>" + Polygons_shape_lnk[ i ]);
        Layer_502[ i ] = Polygons_shape[ i ];
        Layer_502[ i ].addTo(map_502);
    }
    }
  }}
function click_get_position(map){
  // マーカー達の座標
  let positions=[];
  // マーカー達の存在
  let markers=[];
  //クリックイベント
  map.on('click', function(e) {
    //クリック位置経緯度取得
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    positions.push([lat,lng]);
    markers.push(L.marker([lat,lng]).addTo(map));
  } );
  map.on('dblclick',function(e) {
    console.log(JSON.stringify(positions));
  })
  document.addEventListener('keypress', keypress_ivent);
  function keypress_ivent(e) {
    if(e.key === 'x' && markers.length > 0){
      map.removeLayer(markers[markers.length - 1]);
      markers.pop();
      positions.pop();
    }
    return false; 
  }
document.addEventListener('DOMContentLoaded', img(map));
}
function img(map) {
  const imageInput = document.getElementById('imageInput');
  let imageOverlay = null;
  let imageVisible = false;
  let adjustedWidth = 10;
  let adjustedHeight = 10;
  imageInput.addEventListener('change', function(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      const imageWidth = map.getBounds().getWest() - map.getBounds().getEast();
      const imageHeight = map.getBounds().getNorth() - map.getBounds().getSouth();
      adjustedWidth = imageWidth;
      adjustedHeight = imageHeight;
      let imageBounds = [
        [map.getCenter().lat - adjustedHeight / 2, map.getCenter().lng - adjustedWidth / 2],
        [map.getCenter().lat + adjustedHeight / 2, map.getCenter().lng + adjustedWidth / 2]
      ];
      // 画像を地図に被せて表示
      imageOverlay = L.imageOverlay(imageUrl, imageBounds,{
      opacity: 0.6}).addTo(map);
      // イベントリスナーを追加して画像が変更されたときに地図の範囲を更新
      map.on('move', function() {
        imageBounds = [
          [map.getCenter().lat - adjustedHeight / 2, map.getCenter().lng - adjustedWidth / 2],
          [map.getCenter().lat + adjustedHeight / 2, map.getCenter().lng + adjustedWidth / 2]
        ];
        imageOverlay.setBounds(imageBounds);
      });
    } else {
      // 画像を削除
      map.eachLayer(layer => {
        if (layer instanceof L.ImageOverlay) {
          map.removeLayer(layer);
        }
      });
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'p') {
      if (imageOverlay) {
        if (imageVisible) {
          map.removeLayer(imageOverlay);
          imageVisible = false;
        } else {
          imageOverlay.addTo(map);
          imageVisible = true;
        }
      }
    }else if (e.key === 'w'){
      adjustedHeight += 0.0001;
    }else if (e.key === 's'){
      adjustedHeight -= 0.0001;
    }else if (e.key === 'd'){
      adjustedWidth -= 0.0001;
    }else if (e.key === 'a'){
      adjustedWidth += 0.0001;
    }
    imageBounds = [
      [map.getCenter().lat - adjustedHeight / 2, map.getCenter().lng - adjustedWidth / 2],
      [map.getCenter().lat + adjustedHeight / 2, map.getCenter().lng + adjustedWidth / 2]
    ];
    imageOverlay.setBounds(imageBounds);
  });
}