import { Component, Input } from '@angular/core';
import { HousingLocation } from '../models/housing-location';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [ ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt=
    "Exterior photo of {{ housingLocation.name}}">
     <h2 class= "listing-heading">{{housingLocation.name}}</h2>
     <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
  `,
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input() housingLocation !: HousingLocation;
  constructor() { }

}
