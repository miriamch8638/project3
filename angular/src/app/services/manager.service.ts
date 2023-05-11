import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import{memberClass}from '../classes/Member'
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  public isIn = false
  public thisMember:memberClass=new memberClass()
  public ismanager: boolean = false;
  public FullName: string = "שלום וברכה ל"
  url: string = "http://127.0.0.1:5000/"
  // SERVIESכל הגישה לשרת תתבצע ע"י 
  constructor(public http: HttpClient) { }
  ///פונקציות משתמש רגיל
  getByPhoneID(phone: string, id: string): Observable<memberClass> {
    return this.http.get<memberClass>(`${this.url}getMember/${phone}/${id}`)
  }
  getAllMembers(): Observable<Array<Array<memberClass>>> {
    return this.http.get<Array<Array<memberClass>>>(`${this.url}getAllMembers`)
  }
  getByPassIDmanager( id: string,password: string): Observable<Boolean> {
    return this.http.get<Boolean>(`${this.url}getManagerByIDandPass/${id}/${password}`)
  }
  addVaccine( id: string,manufacturer: string,datetoadd:string): Observable<any> {
    debugger
    return this.http.get<Boolean>(`${this.url}addVaccine/${id}/${manufacturer}/${datetoadd}`)
  }
  
  addMember( name: string,idNum: string,Address: string,BornDate: string,
    Phone:string,CellPhone:string,GetCoronaVaccine?:string,
    CoronaVaccineManufacturer?:string,GetPPositiveResult?:string,
     RecoveryDate?:string): Observable<any> {
    debugger
    return this.http.get<Boolean>(`${this.url}addVaccine/
    ${name}/${idNum}/${Address}/${BornDate}/${Phone}/${ CellPhone}/
    ${GetCoronaVaccine}/${CoronaVaccineManufacturer}/${GetPPositiveResult}
    /${RecoveryDate}`)
  }
}    
  