import { DefiFormsModule } from './forms.module';

describe('FormsModule', () => {
  let formsModule: DefiFormsModule;

  beforeEach(() => {
    formsModule = new DefiFormsModule();
  });

  it('should create an instance', () => {
    expect(formsModule).toBeTruthy();
  });
});
