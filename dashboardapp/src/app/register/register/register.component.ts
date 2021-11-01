import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  userData = {
    firstname:'',
    lastname:'',
    email: '',
    phonenumber:'',
    password:'',
    confirmpassword:''
  };

  onSubmit(registerform,userdata){
console.log(registerform);
console.log(userdata);
if(userdata.password===userdata.confirmpassword){
this.router.navigateByUrl("/login");
  registerform.reset();
}
//registerform.reset();
  }

}
