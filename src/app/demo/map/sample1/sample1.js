module.exports = {
  html: `
<clt-map #map>
  <clt-map-layer #addressesLayer></clt-map-layer>
  <clt-map-layer #buildingsLayer></clt-map-layer>
</clt-map>`,
  js: `
@ViewChild('addressesLayer') addressesLayer: CltMapLayerComponent;
@ViewChild('buildingsLayer') buildingsLayer: CltMapLayerComponent;
@ViewChild('map') map: CltMapComponent;
constructor(private mapservice: CltMapMapService) {}
ngOnInit() {
  for (let i = 0; i < 100; i++) {
    this.addressesLayer.addFeature(new Point(this.mapservice.fromLonLat([this.longitude(), this.latitude()])), {
      style: this.mapservice.createBuildingStyleIcon()
    });
  }
}
getRandomArbitrary(min, max) {return Math.random() * (max - min) + min; }
latitude() { return this.getRandomArbitrary(47.5395, 49.0739) }
longitude() {return this.getRandomArbitrary(3.8754, 7.3938); }
`
};