import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CltCoreModule } from '../public_api';
import { AppModule } from './app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
