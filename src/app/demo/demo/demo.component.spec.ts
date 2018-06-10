import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { CoreModule, DefiSideBarService, DefiSidePanelService, DefiFormsModule, DefiCommonService, DefiNotificationsService} from '../../../public_api';
import { DemoModule } from '../demo.module';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        DefiFormsModule,
        BrowserAnimationsModule,
        CoreModule.forRoot(),
        RouterModule.forRoot([
          { path: '', component: DemoComponent }
        ])
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
