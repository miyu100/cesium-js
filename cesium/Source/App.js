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
kmlDataArray[0]=new kmlData("遺産",'cesium/Source/cesium.kml');

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

