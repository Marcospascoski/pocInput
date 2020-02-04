import { AbstractControl } from '@angular/forms';

export class SenhaValidator {

    static MatchPassword(AC: AbstractControl) {
        const formGroup = AC.parent;
        if (formGroup) {
            const senhaControle = formGroup.get('senha');
            const confirmaSenhaControle = formGroup.get('confirmaSenha');

            if (senhaControle && confirmaSenhaControle) {
                const senha = senhaControle.value;
                const confirmaSenha = confirmaSenhaControle.value;
                if (senha !== confirmaSenha) {
                    return { matchPassword: true };
                } else {
                    return null;
                }
            }
        }

        return null;
    }
}