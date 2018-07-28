import { CltNavigationsModule } from './navigations.module';

describe('CltNavigationsModule', () => {
  let navigationsModule: CltNavigationsModule;

  beforeEach(() => {
    navigationsModule = new CltNavigationsModule();
  });

  it('should create an instance', () => {
    expect(navigationsModule).toBeTruthy();
  });
});
