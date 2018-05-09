import { TestBed, async } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:[NavbarComponent],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
