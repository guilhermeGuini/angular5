import { FormGroup } from "@angular/forms/src/model";
export class EqualsPasswordValidator {
    public static validate(firstField, secondField) {
        return (formGroup: FormGroup) => {
            console.debug('Realizando a validação de password');
            console.debug('Field 1 com valor : ' + firstField.value);
            console.debug('Field 2 com valor : ' + secondField.value);

            (formGroup.controls && formGroup.controls[firstField].value == formGroup.controls[secondField].value)
            ? formGroup.controls[secondField].setErrors(formGroup.controls[secondField].getError('required') ? {required: {valid: false}} : {required: {valid: true}}) :
            formGroup.controls[secondField].setErrors({passwordEquals: {valid: false}});

        
            if(formGroup.controls[secondField].getError('passwordEquals') && 
                formGroup.controls[secondField].getError('required')) {
                console.debug('Required: ' + formGroup.controls[secondField].getError('required').valid);
                console.debug('PasswordEquals: ' + formGroup.controls[secondField].getError('passwordEquals').valid);
            }
        }
    }
}