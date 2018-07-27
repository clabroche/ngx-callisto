import { TestBed, async } from '@angular/core/testing';
import { DefiPopoverComponent } from './popover.component';


describe('DefiPopoverComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefiPopoverComponent
      ]
    }).compileComponents();
  });
  it('should create the component', () => {
    const fixture = TestBed.createComponent(DefiPopoverComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
