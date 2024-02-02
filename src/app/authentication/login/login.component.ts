import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestMapperService } from 'src/app/request-mapper.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _router: Router){

  }
  
  public forgetPwd(){
    console.log("hey I am Here");
    this._router.navigate([RequestMapperService.FORGET_PASSWORD_URL])
  }
  
}
