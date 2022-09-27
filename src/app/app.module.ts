import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersListComponent } from './users-list/users-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryComponent } from './country/country.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    UsersListComponent,
    StudentListComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
