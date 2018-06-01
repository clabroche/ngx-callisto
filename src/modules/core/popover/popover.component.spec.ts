import { TestBed, async } from '@angular/core/testing';
import { PopoverComponent } from './popover.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


describe('PopoverComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // NgbModule.forRoot()
      ],
      declarations: [
        PopoverComponent
      ]
    }).compileComponents();
  });
  fit('should create the component', () => {
    const fixture = TestBed.createComponent(PopoverComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
