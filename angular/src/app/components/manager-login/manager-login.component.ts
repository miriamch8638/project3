import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { memberClass } from 'src/app/classes/Member';
import { ManagerService } from '../../services/manager.service';
@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {
  manaderPass: string = "";
  manaderID: string = "";
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  togglePasswordVisibility() {
    this.showPassword1 = !this.showPassword1;
    }
    togglePasswordVisibility2() {
      this.showPassword2 = !this.showPassword2;
      }
  constructor(public managerSer: ManagerService, public router: Router) {
  }
  loginform: FormGroup = new FormGroup({})
  listUsers: Array<memberClass> = new Array<memberClass>()
  ngOnInit(): void {
    this.loginform = new FormGroup({
      "idNumber": new FormControl(null, [Validators.required, Validators.minLength(9),Validators.pattern('[0-9]{9}$')]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(10)])
        // Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+')])
    }
    )
  }

  get getidNumber() {
    return this.loginform.controls['idNumber'];
  }
  get getPassword() {
    return this.loginform.controls['password'];
  }

  p: memberClass = new memberClass()
  public check() {
    debugger
    alert("you are connected")
    this.p = this.loginform.value
    this.managerSer.getByPassIDmanager(this.loginform.value["idNumber"], this.loginform.value["password"]).subscribe(
      succ => {
        console.log(succ)
        debugger
        if (succ) {
          this.managerSer.ismanager = true
          this.router.navigate(['/home'])
        }
        else if (this.managerSer.ismanager != true)
          alert("אינך מנהל הקופה")
      },
      err => { alert(err.message) }
    )

  }
}
