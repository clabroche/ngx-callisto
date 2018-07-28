import { CltFormsModule } from './forms.module';

describe('FormsModule', () => {
  let formsModule: CltFormsModule;

  beforeEach(() => {
    formsModule = new CltFormsModule();
  });

  it('should create an instance', () => {
    expect(formsModule).toBeTruthy();
  });
});
