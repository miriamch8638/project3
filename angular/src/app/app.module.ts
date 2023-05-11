import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ManagerLoginComponent } from './components/manager-login/manager-login.component';

import { AllDataComponent } from './components/all-data/all-data.component';
import { AllMembersComponent } from './components/all-members/all-members.component';
import { DatePipe } from '@angular/common';
import { ManagerService } from './services/manager.service';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
@NgModule({
  declarations: [
    AppComponent,
    ManagerLoginComponent,
    HomeComponent,
    NavComponent,
    AllDataComponent,
    AllMembersComponent,
    MoreDetailsComponent,
    AddMemberComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
