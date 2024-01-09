import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { AppRooutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRooutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
