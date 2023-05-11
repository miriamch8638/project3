import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {
  constructor(public managerSer: ManagerService) { }
  VaccineManufacturer: string = ' ';
  dateVaccine: string = ' '
  minDate = new Date('01/01/2019');
  maxDate = new Date();


  ngOnInit(): void {
    // console.log(this.managerSer.thisMember);
  }

  insertDateObject(dateString: string): boolean {
    let dateObject = new Date(dateString);
    // console.log(dateObject)
    // console.log(this.dateVaccine);
    if (dateObject < this.minDate || dateObject > this.maxDate) {
      alert('Invalid date. Please select a date between 01/01/2019 and today.')
      return false
    }
    else
      return true
  }
  checkVaccune() {
    debugger
    if (this.insertDateObject(this.dateVaccine)==true && this.VaccineManufacturer!=null)
      console.log(this.dateVaccine, this.VaccineManufacturer);

      this.managerSer.addVaccine(this.managerSer.thisMember.IDnumber!,this.VaccineManufacturer,this.dateVaccine).subscribe(
        succ=>{
          console.log(succ);
          alert("החיסון נוסף בהצלחה")
        },
        err=>{
          console.log(err);
        }
      )
  }
}
