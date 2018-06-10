import { TestBed, async } from '@angular/core/testing';
import { DefiNavbarComponent } from './navbar.component';

describe('DefiNavbarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:[DefiNavbarComponent],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(DefiNavbarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
