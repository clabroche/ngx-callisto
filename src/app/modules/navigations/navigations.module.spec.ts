import { DefiNavigationsModule } from './navigations.module';

describe('DefiNavigationsModule', () => {
  let navigationsModule: DefiNavigationsModule;

  beforeEach(() => {
    navigationsModule = new DefiNavigationsModule();
  });

  it('should create an instance', () => {
    expect(navigationsModule).toBeTruthy();
  });
});
