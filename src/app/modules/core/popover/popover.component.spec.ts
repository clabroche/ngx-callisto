import { TestBed, async } from '@angular/core/testing';
import { DefiPopoverComponent } from './popover.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


describe('DefiPopoverComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // NgbModule.forRoot()
      ],
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
