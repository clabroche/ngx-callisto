import { TestBed, async } from '@angular/core/testing';
import { CltPopoverComponent } from './popover.component';


describe('CltPopoverComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CltPopoverComponent
      ]
    }).compileComponents();
  });
  it('should create the component', () => {
    const fixture = TestBed.createComponent(CltPopoverComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
