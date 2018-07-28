import { MapModuleSample } from './map.module';

describe('MapModuleSample', () => {
  let mapModule: MapModuleSample;

  beforeEach(() => {
    mapModule = new MapModuleSample();
  });

  it('should create an instance', () => {
    expect(mapModule).toBeTruthy();
  });
});
