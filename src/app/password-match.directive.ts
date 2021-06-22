import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { ValidationService } from './validation.service';


@Directive({
  selector: '[appPasswordMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true }]

})
export class PasswordMatchDirective {


  @Input('appPasswordMatch') MatchPassword: string[] = [];

  constructor(
    private validatior : ValidationService
  ) {
   }

  validate(formGroup: FormGroup): ValidationErrors {
    return this.validatior.MatchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
  }
}

