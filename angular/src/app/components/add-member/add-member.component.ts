import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
constructor(public managerSer:ManagerService,public router:Router){}
  sighupForm: FormGroup = new FormGroup({})
  ngOnInit(): void {

    this.sighupForm = new FormGroup(
      {
        "name": new FormControl(null, [Validators.required, Validators.pattern(/^[a-z\u0590-\u05fe]+$/i)]),
        "IDnumber": new FormControl(null, [Validators.required, Validators.pattern('[0-9]{9}$')]),
        "CellPhone": new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        "Phone": new FormControl(null, [Validators.required, Validators.pattern('[0-9]{9}$')]),
        "BornDate": new FormControl(null, [Validators.required]),
        "Address": new FormControl(null, [Validators.required]),
        "GetCoronaVaccine": new FormControl([ Validators.pattern(/^[a-z\u0590-\u05fe]+$/i)]),
        "CoronaVaccineManufacturer": new FormControl( [ Validators.pattern(/^[a-z\u0590-\u05fe]+$/i)]),
        "GetPPositiveResult": new FormControl( [ Validators.pattern(/^[a-z\u0590-\u05fe]+$/i)]),
        "RecoveryDate": new FormControl( [this.checkSeminar.bind(this)]),
      }
    )

  }
  checkSeminar(myS:FormControl)
  {
  if(myS.value=='נוות ישראל'||myS.value=='מעלות')
      return null
  return {'check':true}
  }
  get getName() {
    return this.sighupForm.controls['name'];
  }
  get getIDnumber() {
    return this.sighupForm.controls['IDnumber'];
  }
  get getPhone() {
    return this.sighupForm.controls['Phone'];
  }
  get getCellPhone() {
    return this.sighupForm.controls['CellPhone'];
  }
  get getBornDate() {
    return this.sighupForm.controls['BornDate'];
  }
  get getAddress() {
    return this.sighupForm.controls['Address'];
  }
  get getGetCoronaVaccine() {
    return this.sighupForm.controls['GetCoronaVaccine'];
  }
  get CoronaVaccineManufacturer() {
    return this.sighupForm.controls['CoronaVaccineManufacturer'];
  }
  get getGetPPositiveResult() {
    return this.sighupForm.controls['GetGetPPositiveResult'];
  }
  get getGetRecoveryDate() {
    return this.sighupForm.controls['RecoveryDate'];
  }
  
  firstaid: boolean = false
  public okForm() {
//  this.managerSer.addMember(this.sighupForm.controls["name"],this.sighupForm.controls["IDnumber"],this.sighupForm.controls["Address"],
// this.sighupForm.controls["BornDate"],this.sighupForm.controls["Phone"], this.sighupForm.controls["CellPhone"],
//  this.sighupForm.controls["GetCoronaVaccine"],this.sighupForm.controls["CoronaVaccineManufacturer"],
//  this.sighupForm.controls["GetPPositiveResult"],this.sighupForm.controls["RecoveryDate"]).subscribe(succ=>{
//  },
//  err=>{

//  })

  }
}

