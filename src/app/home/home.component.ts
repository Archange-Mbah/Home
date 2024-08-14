import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../models/housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
     <section>
      <form>
        <input type="text" placeholder="filter by city">
        <button class="primary" type="button">Search</button>
      </form>
     </section>
     <section class="results">
        <app-housing-location *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"></app-housing-location>
     </section>  
      `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingLocationList:HousingLocation[]= [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://i.pinimg.com/564x/2c/55/21/2c5521af4bfbd2d545c388de165b9bb8.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://i.pinimg.com/236x/be/07/fc/be07fcbcd542ee133cc8c27f10fac641.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'https://i.pinimg.com/474x/52/cb/68/52cb68fa2ed8d4e70433839e5355c284.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://i.pinimg.com/236x/bc/61/0f/bc610f14aa1273fdc309e463c56a81a4.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: 'https://i.pinimg.com/474x/4b/e5/e8/4be5e89ac181f30fe1749e46cf1c56b2.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://i.pinimg.com/236x/3c/b7/af/3cb7afd7aa8da7bf31d92f7a147e632b.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://i.pinimg.com/236x/f2/75/cb/f275cbb5125aa0b1a4fb083a70e5e972.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://i.pinimg.com/236x/08/2d/cd/082dcd8f9aaffb8d42017b1d0672af27.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://i.pinimg.com/474x/d5/cb/e0/d5cbe01fbfb4e9b545362245366e358c.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: 'https://i.pinimg.com/236x/58/eb/2a/58eb2a6028b49c9eac110df176bcf97f.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ]

}
