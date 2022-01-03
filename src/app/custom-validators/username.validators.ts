import { AbstractControl, ValidationErrors } from '@angular/forms';


/**
 *  A function that receives a control and synchronously returns a map of validation errors if present, otherwise null.

    interface ValidatorFn {
    (control: AbstractControl): ValidationErrors | null
    }
 * 
 */
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0){
            return { cannotContainSpace: true };
        }
        return null
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(control.value == "vaibhav"){
                    resolve({ shouldBeUnique: true })
                }else{
                    resolve(null);
                }
            },2000);
        })
    }
}