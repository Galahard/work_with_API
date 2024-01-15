import {Component, Input} from '@angular/core';
import {Airport} from "../data/Airport";

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})

export class AirportsComponent {

  @Input() airports: Airport
}
