import { Component } from '@angular/core';
import { PasswordMatchDirective } from './password-match.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registrationForm';
  user = {
    firstName : '',
    lastName : '',
    email : '',
    mobile : '',
    password : '',
    confirmPassword : '',
  }
  passwordFlag = false;


  onSubmit(){
    if (this.user.password !== this.user.confirmPassword){
      this.passwordFlag = true;
    } else {
      console.log(this.user);
    }
  }
}
