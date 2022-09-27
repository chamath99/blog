import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    SignInComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SignInComponent
  ]
})
export class UserAuthModule { }
