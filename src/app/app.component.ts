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
    confirmPassword : '',
  }

  onSubmit(){
    console.log(this.user);
  }
}
