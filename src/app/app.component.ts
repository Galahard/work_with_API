import { Component, OnInit } from '@angular/core';
import {SupportData} from "./SupportData";

import {FlightService} from "./service/flight.service";
import {Airport} from "./data/Airport";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Flights Schedule';
  icao : string = "KLAX";
  flightData: SupportData ;
  airportData: Airport;
  loading: boolean= true;
  errorMessage: string;

  constructor(private flightsService: FlightService) {
  }

  getAll(){
    this.flightsService.getAll(this.icao).subscribe(flights=>{
      this.flightData=flights
      this.loading= true;
      console.log(this.icao)
    },
      (error) => {
        console.error('error caught in component')
        this.errorMessage = error;
        this.loading = false;


      })
  }
  getAirport(){
    this.flightsService.getAirport(this.icao).subscribe(airports=>{
        this.airportData=airports
        this.loading= true;
        console.log(this.icao)
      },
      (error) => {
        console.error('error caught in component')
        this.errorMessage = error;
        this.loading = false;


      })
  }




  ngOnInit(): void {
    this.getAll();
    this.getAirport();
  }





}

