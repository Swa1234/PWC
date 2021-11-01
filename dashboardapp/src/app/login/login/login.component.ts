import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
submitted=false;
  constructor() { }

  ngOnInit(): void {

    
  }

  userData = {
    email: '',
    password:''
  };

onSubmit(loginForm,userdata){
console.log(loginForm);
console.log(userdata);
alert('Form submitted successfully');
localStorage.setItem('email',userdata.email);
localStorage.setItem('password',userdata.password);
    
loginForm.reset();
  }

}
