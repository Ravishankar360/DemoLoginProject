import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrl="http://localhost:9090/user/login";
  constructor(private httpClient: HttpClient) { }
  loginUser(user:User):Observable<Object>{
    console.log(user);
    return this.httpClient.post("http://localhost:9090/user/login",user);
  }

  userRegistration(user:User):Observable<Object>{
    console.log(user);
    return this.httpClient.post("http://localhost:9090/user/addUser",user);
  }
}
