import { Component } from '@angular/core';
import { Donut, Donuts } from '../donut';
import { DonutApiService } from '../donut-api.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {
  donuts : Donuts = {} as Donuts;

  constructor(private donutApi:DonutApiService) {
    this.getDonuts();
  }

  getDonuts() : void {
    this.donutApi.getDonuts().subscribe(
      (result) => {
        this.donuts = result;
      }
    )
  }
}
