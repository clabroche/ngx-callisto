import { DefiDisplayModule } from './defi-display.module';

describe('DefiDisplayModule', () => {
  let defiDisplayModule: DefiDisplayModule;

  beforeEach(() => {
    defiDisplayModule = new DefiDisplayModule();
  });

  it('should create an instance', () => {
    expect(defiDisplayModule).toBeTruthy();
  });
});
