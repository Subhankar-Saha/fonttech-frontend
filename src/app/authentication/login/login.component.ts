import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestMapperService } from 'src/app/request-mapper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackService } from 'src/app/notification/snack.service';
import { TransmissionService } from 'src/app/raintree/transmission.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public manualEntryForm: FormGroup;
  public disabled: boolean = false;
  constructor(private formBuilder: FormBuilder, private snackbar: SnackService, private _transmit: TransmissionService, private _router: Router){
    this.manualEntryForm = this.formBuilder.group({
      'emailId': ['', [Validators.required, this._transmit.noWhitespaceValidator]],
      'password' : ['',[Validators.required, this._transmit.noWhitespaceValidator]]
    });
  }
  

  ngOnInit(): void {
      
  }

  public forgetPwd() : void{
    console.log("hey I am Here");
    this._router.navigate([`account/${RequestMapperService.REGISTRATION_URL}`])
  }

  public navigateSignup(): void{
    console.log("hey I am Here");
    this._router.navigate([`${RequestMapperService.AUTH_URL}/${RequestMapperService.REGISTRATION_URL}`])
  }

  public onSubmit(): void{

  }
  
}
