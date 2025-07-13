import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ActivatedRoute } from '@angular/router';
import { stationsData } from '../data.type';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit{
   
 stations:  stationsData[]= [];

 traindata: any={
  locationFrom: '',
  locationTo:'',
  date:'',
 };
 trainList:any []=[];
 filteredTrains: any []=[];
  constructor(private mainS:MainService, private router:ActivatedRoute){

  }

  ngOnInit(): void {


    this.mainS.getLocations().subscribe((result:stationsData[])=>{
      this.stations=result
    })
  }
 
  availaibleTrain(){
   const { locationFrom, locationTo, date } = this.traindata;
    // console.log('Submitted values:', { locationFrom, locationTo, date });

    const selectedDate = date;

    this.mainS.getTrains( locationFrom, locationTo).subscribe(result=>{
      this.trainList= result;
      this.filteredTrains = result.filter(train =>
        train.departureDate.startsWith(selectedDate)
      );

      console.log('Form submitted:',this.filteredTrains);
      
    });
    
  }

  bookTrain(){
    
  }

}