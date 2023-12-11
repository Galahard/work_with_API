import { Component, Input } from '@angular/core';
import {SupportData} from "../SupportData";



@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})




export class FlightsComponent  {

@Input() flights:SupportData

}





