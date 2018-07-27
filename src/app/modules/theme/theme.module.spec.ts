import { CltThemeModule } from './theme.module';

describe('CltThemeModule', () => {
  let themeModule: CltThemeModule;

  beforeEach(() => {
    themeModule = new CltThemeModule();
  });

  it('should create an instance', () => {
    expect(themeModule).toBeTruthy();
  });
});
