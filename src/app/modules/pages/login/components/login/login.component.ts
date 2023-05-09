import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public email = "";
  public password = "";

  validationFields() {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (!reg.test(this.email)) return true;

    if (this.password.length < 6) return true;

    return false;
  }
}
