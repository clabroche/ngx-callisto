import { Password } from "./Password.validator"
import { AbstractControl } from "@angular/forms";

describe('PassordValidator', () => {
    it('#matchPassword', async () => {
        const AC = jasmine.createSpyObj('AbstractControl', ['a'])
        AC.value = {}
        AC.value.passphrase = 'hey'
        AC.value.recheckPassphrase = 'hey'
        expect(Password.MatchPassword(AC)).toBeNull()

        AC.value.passphrase = 'hey'
        AC.value.recheckPassphrase = 'he'
        expect(Password.MatchPassword(AC)).toEqual({ recheckPassphrase: true })
    })
    it('#generatePassword', async () => {
        let password = Password.GeneratePassword()
        expect(password.length).toEqual(12)
        password = Password.GeneratePassword(128)
        expect(password.length).toEqual(128)
    })
});