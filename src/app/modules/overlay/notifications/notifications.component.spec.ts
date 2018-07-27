import { TestBed, async } from '@angular/core/testing';

import { CltNotificationsComponent } from './notifications.component';
import { CltNotificationsService } from '../providers/notifications.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('CltNotificationsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CltNotificationsComponent
      ],
      providers: [CltNotificationsService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CltNotificationsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have good properties and dependencies`, async(() => {
    const fixture = TestBed.createComponent(CltNotificationsComponent);
    const app: CltNotificationsComponent = fixture.debugElement.componentInstance;
    expect(app.ns instanceof CltNotificationsService).toBeTruthy();
  }));
  describe('#add', () => {
    it(`should add a notif`, async () => {
      const fixture = TestBed.createComponent(CltNotificationsComponent);
      const app: CltNotificationsComponent = fixture.debugElement.componentInstance;
      app.ns.add('test', 'body test');
      fixture.detectChanges();
      const notif: HTMLElement = fixture.debugElement.query(By.css('.notifsWrapper')).nativeElement;
      expect(notif.childElementCount).toEqual(1);

      app.ns.add('test', 'body test');
      fixture.detectChanges();
      expect(notif.childElementCount).toEqual(2);
    });
  });
  describe('#delete', () => {
    it(`should delete a notif`, async () => {
      const fixture = TestBed.createComponent(CltNotificationsComponent);
      const app: CltNotificationsComponent = fixture.debugElement.componentInstance;
      const notification = app.ns.add('test', 'body test');
      app.ns.add('test', 'body test');
      const notif: HTMLElement = fixture.debugElement.query(By.css('.notifsWrapper')).nativeElement;
      fixture.detectChanges();
      expect(notif.childElementCount).toEqual(2);
      app.ns.delete(notification.id);
      await wait(800);
      fixture.detectChanges();
      expect(notif.childElementCount).toEqual(1);
      app.deleteNotif(notification.id);
      fixture.detectChanges();
      expect(notif.childElementCount).toEqual(1);

    });
  });
  describe('#deleteAll', () => {
    it(`should delete all notif`, async () => {
      const fixture = TestBed.createComponent(CltNotificationsComponent);
      const app: CltNotificationsComponent = fixture.debugElement.componentInstance;
      const notification = app.ns.add('test', 'body test');
      app.ns.add('test', 'body test');
      const notif: HTMLElement = fixture.debugElement.query(By.css('.notifsWrapper')).nativeElement;
      fixture.detectChanges();
      expect(notif.childElementCount).toEqual(2);
      app.deleteAll();
      await wait(800);
      fixture.detectChanges();
      expect(notif.childElementCount).toEqual(0);
    });
  });
  describe('#getHtmlNotif', () => {
    it(`should get html`, async () => {
      const fixture = TestBed.createComponent(CltNotificationsComponent);
      const app: CltNotificationsComponent = fixture.debugElement.componentInstance;
      const notification1 = app.ns.add('test', 'body test');
      const notification2 = app.ns.add('test', 'body test');
      const notif: HTMLElement = fixture.debugElement.query(By.css('.notifsWrapper')).nativeElement;
      fixture.detectChanges();
      expect(notif.children.item(0) === (await app.getHtmlNotif(notification1.id))).toBeTruthy();
      expect(notif.children.item(1) === (await app.getHtmlNotif(notification2.id))).toBeTruthy();
    });
  });
});


function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
