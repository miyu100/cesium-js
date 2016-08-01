 var viewer = new Cesium.Viewer('cesiumContainer',{
imageryProvider:new Cesium.OpenStreetMapImageryProvider({
url:'http://cyberjapandata.gsi.go.jp/xyz/std/',
credit: new Cesium.Credit('’n—‰@ƒ^ƒCƒ‹','','http://maps.gsi.go.jp/development/ichiran.html')
}),
baseLayerPicker:false
});

viewer.dataSources.add(Cesium.KmlDataSource.load("cesium.kml"));

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

var hcc4 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 132.451071,34.333008,0.0),
  name:'hcc4',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.BLUE.withAlpha(0.5),
  }
});

var hcc5 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 127.451071,26.333008,0.0),
  name:'hcc5',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.BLUE.withAlpha(0.5),
  }
});

var hcc6 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 135.451071,34.333008,0.0),
  name:'hcc6',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.BLUE.withAlpha(0.5),
  }
});

var hcc7 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 135.451071,33.333008,0.0),
  name:'hcc7',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.BLUE.withAlpha(0.5),
  }
});

var hcc8 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 137.451071,36.333008,0.0),
  name:'hcc8',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.BLUE.withAlpha(0.5),
  }
});
var hcc9 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 138.451071,35.333008,0.0),
  name:'hcc9',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.BLUE.withAlpha(0.5),
  }
});
var hcc10 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 141.451071,39.333008,0.0),
  name:'hcc10',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.BLUE.withAlpha(0.5),
  }
});
var hcc11 = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees( 132.451071,35.333008,0.0),
  name:'hcc11',
  ellipse:{
    semiMinorAxis : 50000.0,
    semiMajorAxis : 50000.0,
    height : 10.0,
    material : Cesium.Color.BLUE.withAlpha(0.5),
  }
});
