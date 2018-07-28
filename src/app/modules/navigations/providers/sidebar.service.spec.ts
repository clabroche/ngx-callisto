import { async } from '@angular/core/testing';
import { CltSideBarService } from './sidebar.service';

describe('SidebarService', () => {
  let service: CltSideBarService;

  beforeEach(async(() => { service = new CltSideBarService(); }));

  it('should close on default value', async(() => {
    expect(service._open).toEqual(false);
  }));

  describe('#open', () => {
    it('should open', async(() => {
      service.open();
      expect(service._open).toEqual(true);
    }));
    it('should close', async(() => {
      service.close();
      expect(service._open).toEqual(false);
    }));
  });
});
