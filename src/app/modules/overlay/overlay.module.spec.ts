import { DefiOverlayModule } from './overlay.module';

describe('DefiOverlayModule', () => {
  let overlayModule: DefiOverlayModule;

  beforeEach(() => {
    overlayModule = new DefiOverlayModule();
  });

  it('should create an instance', () => {
    expect(overlayModule).toBeTruthy();
  });
});
