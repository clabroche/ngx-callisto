import { DefiContainersModule } from './containers.module';

describe('DefiContainersModule', () => {
  let containersModule: DefiContainersModule;

  beforeEach(() => {
    containersModule = new DefiContainersModule();
  });

  it('should create an instance', () => {
    expect(containersModule).toBeTruthy();
  });
});
