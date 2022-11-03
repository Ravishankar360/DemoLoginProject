import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginServiceService } from '../login-service.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user: User= new User();
  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit(): void {} 

  userlogin(){
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data=>{
      alert("Login Successfully");
      this.router.navigate(["registration"]);
    },error=>alert("Please enter correct username and password"));

  }
    
    

  }

