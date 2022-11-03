import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User= new User();
  constructor(private loginService: LoginServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  userRegistration(){
    console.log(this.user);
    this.loginService.userRegistration(this.user).subscribe(data=>{
      alert("User Created Successfully");
      this.router.navigate(["login"]);
    },error=>alert("Something went wrong"));

  }

}
