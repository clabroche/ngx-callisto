import { CltDisplayModule } from './defi-display.module';

describe('CltDisplayModule', () => {
  let defiDisplayModule: CltDisplayModule;

  beforeEach(() => {
    defiDisplayModule = new CltDisplayModule();
  });

  it('should create an instance', () => {
    expect(defiDisplayModule).toBeTruthy();
  });
});
