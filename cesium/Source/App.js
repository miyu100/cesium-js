 var viewer = new Cesium.Viewer('cesiumContainer',{
imageryProvider:new Cesium.OpenStreetMapImageryProvider({
url:'http://cyberjapandata.gsi.go.jp/xyz/std/',
credit: new Cesium.Credit('’n—‰@ƒ^ƒCƒ‹','','http://maps.gsi.go.jp/development/ichiran.html')
}),
baseLayerPicker:false
});


function kmlData(_label, _url) {
	this.label = _label;
	this.url = _url;
}
var kmlDataArray=[];
kmlDataArray[0]=new kmlData("避難所",'data/kml/hinanjo.kml');
kmlDataArray[1]=new kmlData("避難場所",'data/kml/hinanbasyo.kml');
//オーバレイ配列を用意
var overlayDataArray=[];
var openStreetMap = [];
//ビューア初期化	
var viewer = new Cesium.Viewer('cesiumContainer',{
	imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
		url : '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
		enablePickFeatures : false
	}),
	navigationHelpButton : false,
	navigationInstructionsInitiallyVisible : false,
	geocoder:false,
	timeline: false,
	animation: false,
	sceneModePicker:false,
	baseLayerPicker:false,
	scene3DOnly : true,
	terrainExaggeration : 1.0
});
//地形メッシュを設定
var cesiumTerrainProviderMeshes = new Cesium.CesiumTerrainProvider({
	url : '//assets.agi.com/stk-terrain/world',
	requestWaterMask : true,
	requestVertexNormals : true
});
viewer.terrainProvider = cesiumTerrainProviderMeshes;
//地形を強調する際は値を変更
<<<<<<< HEAD
viewer.terrainExaggeration = 3.0;
=======
//viewer.terrainExaggeration = 3.0;
>>>>>>> gh-pages
//フォグ
var fog = new Cesium.Fog();
fog.density = 0.0005;
fog.screenSpaceErrorFactor = 100.0;
//起動シークエンス
$(function() {
	$('.cesium-widget-credits').css('display', 'none');
});
fadeInOut(blackOutDiv,0);
var layers = viewer.scene.imageryLayers;
setTimeout('groundZero()',1000);
function groundZero(){
	changeViewPoint(1,3);
	openStreetMapLayer();
	setTimeout('landing()',4000);
}
function landing(){
	changeViewPoint(2,3);
	setTimeout('fadeInOut(blackOutDiv,1)',3000);
	setTimeout('loadKml()',3000);
}
//KMLロード関数
function loadKml(){			
	var i = 0;
	var load = setInterval(function(){
		var promise = Cesium.KmlDataSource.load(kmlDataArray[i].url);
		promise.then(function(dataSource) {
			viewer.dataSources.add(dataSource);
		}).otherwise(function(error){
			alert('KMLデータが読み込めません');
		});
		i++;
		if (i == kmlDataArray.length){
			clearInterval(load);
			setClickEvent();
			setTimeout('fadeInOut(blackOutDiv,0)',3000);
		}
	}, 200);
}


 viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(139.4130,35.4122,5000000)
    });


var hcc0 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 145.451071,44.333008,0.0),
  name:'hcc0',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.GREEN.withAlpha(0.5),
  }
});

var hcc1 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 140.451071,40.333008,0.0),
  name:'hcc1',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.GREEN.withAlpha(0.5),
  }
});

var hcc2 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 130.451071,30.333008,0.0),
  name:'hcc2',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.GREEN.withAlpha(0.5),
  }
});

var hcc3 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 142.451071,27.333008,0.0),
  name:'hcc3',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.GREEN.withAlpha(0.5),
  }
});

