import { Component } from '@angular/core';

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
    password1 : '',
  }
  passwordFlag = false;


  onSubmit(){
    if (this.user.password !== this.user.password1){
      this.passwordFlag = true;
    } else {
      console.log(this.user);
    }
  }
}
