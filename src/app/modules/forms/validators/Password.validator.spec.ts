import { DefiPassword } from "./Password.validator"
import { AbstractControl } from "@angular/forms";

describe('PassordValidator', () => {
    it('#matchPassword', async () => {
        const AC = jasmine.createSpyObj('AbstractControl', ['a'])
        AC.value = {}
        AC.value.passphrase = 'hey'
        AC.value.recheckPassphrase = 'hey'
        expect(DefiPassword.MatchPassword(AC)).toBeNull()

        AC.value.passphrase = 'hey'
        AC.value.recheckPassphrase = 'he'
        expect(DefiPassword.MatchPassword(AC)).toEqual({ recheckPassphrase: true })
    })
    it('#generatePassword', async () => {
        let password = DefiPassword.GeneratePassword()
        expect(password.length).toEqual(12)
        password = DefiPassword.GeneratePassword(128)
        expect(password.length).toEqual(128)
    })
});