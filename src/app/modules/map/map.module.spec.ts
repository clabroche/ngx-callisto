import { CltMapModule } from './map.module';

describe('CltMapModule', () => {
  let mapModule: CltMapModule;

  beforeEach(() => {
    mapModule = new CltMapModule();
  });

  it('should create an instance', () => {
    expect(mapModule).toBeTruthy();
  });
});
