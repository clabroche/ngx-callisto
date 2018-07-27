import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CltPanelComponent } from './panel.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CltPanelComponent', () => {
  let component: CltPanelComponent;
  let fixture: ComponentFixture<CltPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ CltPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CltPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
