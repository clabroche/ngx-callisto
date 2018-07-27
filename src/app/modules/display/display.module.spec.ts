import { CltDisplayModule } from './display.module';

describe('CltDisplayModule', () => {
  let cltDisplayModule: CltDisplayModule;

  beforeEach(() => {
    cltDisplayModule = new CltDisplayModule();
  });

  it('should create an instance', () => {
    expect(cltDisplayModule).toBeTruthy();
  });
});
