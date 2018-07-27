import { TestBed, inject } from '@angular/core/testing';

import { CltThemeService } from './theme.service';

describe('CltThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CltThemeService]
    });
  });

  it('should be created', inject([CltThemeService], (service: CltThemeService) => {
    expect(service).toBeTruthy();
  }));
});
