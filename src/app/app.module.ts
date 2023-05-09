import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { LoginModule } from "./modules/pages/login/login.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
