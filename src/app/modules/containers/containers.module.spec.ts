import { CltContainersModule } from './containers.module';

describe('CltContainersModule', () => {
  let containersModule: CltContainersModule;

  beforeEach(() => {
    containersModule = new CltContainersModule();
  });

  it('should create an instance', () => {
    expect(containersModule).toBeTruthy();
  });
});
