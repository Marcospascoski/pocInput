import { AbstractControl } from '@angular/forms';

export class EmailValidator {

    static MatchEmail(AC: AbstractControl) {
        const formGroup = AC.parent;
        if (formGroup) {
            const emailControle = formGroup.get('email');
            const confirmaEmailControle = formGroup.get('confirmaEmail');

            if (emailControle && confirmaEmailControle) {
                const email = emailControle.value;
                const confirmaEmail = confirmaEmailControle.value;
                if (email !== confirmaEmail) {
                    return { matchEmail: true };
                } else {
                    return null;
                }
            }
        }

        return null;
    }
}