import { TestBed, async } from '@angular/core/testing';
import { CltNavbarComponent } from './navbar.component';

describe('CltNavbarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CltNavbarComponent],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(CltNavbarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
