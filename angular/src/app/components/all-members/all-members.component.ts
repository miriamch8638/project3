import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { memberClass } from 'src/app/classes/Member';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.css']
})
export class AllMembersComponent implements OnInit {
  //componentVisible = false;
  constructor(public managerSer:ManagerService,public r:Router){}
  listAllMembers: Array<Array<memberClass>>= new Array<Array<memberClass>>()
  ngOnInit(): void {
    debugger
  this.managerSer.getAllMembers().subscribe(
    succ=>{this.listAllMembers=succ},
    err=>{alert(err.message)}
  )
  }
  Move(member:memberClass){
debugger
  }
  selectedUser = null;

  toggleSelectedUser(user:any) {
    if (this.selectedUser === user) {
      this.selectedUser = null;
    } else {
      this.selectedUser = user;
    }
  }
  PassMoreDetails(member:memberClass){
    debugger
    this.managerSer.thisMember=member
    this.r.navigate(['/more-details'])
  }
  }