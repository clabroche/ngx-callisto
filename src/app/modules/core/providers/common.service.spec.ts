import { async } from '@angular/core/testing';
import { CltCommonService } from './common.service';

describe('CltCommonService', () => {
  let service: CltCommonService;

  beforeEach(async(() => { service = new CltCommonService(); }));
  describe('#equalityObject', () => {
    it('should say true on equal object', async(() => {
      const testCases = [
        [{}, {}],
        [{ a: 1 }, { a: 1 }],
        [{ b: ['a', { a: 'a' }], a: 1 }, { a: 1, b: ['a', { a: 'a' }] }],
      ];
      testCases.map(test => {
        expect(service.equalityObjects(test[0], test[1])).toEqual(true);
      });
    }));
    it('should say false on different object', () => {
      const testCases = [
        [{}, { a: 'test' }],
        [{ a: 1 }, { a: 2 }],
        [{ b: ['a', { a: 'b' }], a: 1 }, { a: 1, b: ['a', { a: 'a' }] }],
        [{ b: ['a', { a: 'b' }], a: 1 }, { a: 1 }],
      ];
      testCases.map(test => {
        expect(service.equalityObjects(test[0], test[1])).toEqual(false);
      });
    });
  });
  describe('#wait', () => {
    it('wait', async () => {
      const timeout = setTimeout(_ => expect(false).toBeTruthy('timeout not triggered'), 310);
      await service.wait(300);
      clearTimeout(timeout);
    });
  });

  describe('#flatten', () => {
    it('it flat', async () => {
      const result = service.flatten({
        a: {
          b: {
            c: 6,
            d: 'mlk'
          },
          e: [
            { c: 8 },
            { g: 'mlk' }
          ]
        }
      });
      expect(result).toEqual({
        d: 'mlk',
        c: 8,
        g: 'mlk'
      });
    });
  });
  describe('#stringifyWithoutPropertiesQuote', () => {
    it('it stringifyWithoutPropertiesQuote', async () => {
      const result = service.stringifyWithoutPropertiesQuote({
        a: {
          b: {
            c: 6,
            d: 'mlk'
          },
          e: [
            { c: 8 },
            { g: 'mlk' }
          ]
        }
      });
      expect(result).toEqual('{a:{b:{c:6,d:"mlk"},e:[{c:8},{g:"mlk"}]}}');
    });
  });
});
