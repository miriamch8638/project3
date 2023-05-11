import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManagerLoginComponent } from './components/manager-login/manager-login.component';
import { AllMembersComponent } from './components/all-members/all-members.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';

const myroute: Routes = [
    {path:'' ,component:HomeComponent},
    {path:'home' ,component:HomeComponent},
    {path:'manager-login',component:ManagerLoginComponent},
    {path:'all-members',component:AllMembersComponent},
    {path:'more-details',component:MoreDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(myroute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
