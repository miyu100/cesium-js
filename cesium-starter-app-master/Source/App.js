var cesiumWidget = new Cesium.Viewer('cesiumContainer');


viewer.dataSources.add(Cesium.KmlDataSource.load('https://github.com/miyu100/cesium-js/blob/gh-pages/cesium-starter-app-master/Source/Australia.kml'));

viewer.zoomTo(viewer.entities);
