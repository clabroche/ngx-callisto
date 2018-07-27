import { CltPassword } from './Password.validator';

describe('PassordValidator', () => {
    it('#matchPassword', async () => {
        const AC = jasmine.createSpyObj('AbstractControl', ['a']);
        AC.value = {};
        AC.value.passphrase = 'hey';
        AC.value.recheckPassphrase = 'hey';
        expect(CltPassword.MatchPassword(AC)).toBeNull();

        AC.value.passphrase = 'hey';
        AC.value.recheckPassphrase = 'he';
        expect(CltPassword.MatchPassword(AC)).toEqual({ recheckPassphrase: true });
    });
    it('#generatePassword', async () => {
        let password = CltPassword.GeneratePassword();
        expect(password.length).toEqual(12);
        password = CltPassword.GeneratePassword(128);
        expect(password.length).toEqual(128);
    });
});
