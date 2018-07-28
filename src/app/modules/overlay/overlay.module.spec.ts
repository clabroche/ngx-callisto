import { CltOverlayModule } from './overlay.module';

describe('CltOverlayModule', () => {
  let overlayModule: CltOverlayModule;

  beforeEach(() => {
    overlayModule = new CltOverlayModule();
  });

  it('should create an instance', () => {
    expect(overlayModule).toBeTruthy();
  });
});
