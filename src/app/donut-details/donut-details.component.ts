import { Component, Input } from '@angular/core';
import { Donut } from '../donut';
import { DonutApiService } from '../donut-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent {
  donut : Donut = {} as Donut;

  constructor(private donutApi:DonutApiService, private _Activatedroute:ActivatedRoute) {
    let id : number = Number(this._Activatedroute.snapshot.paramMap.get("donut"));
    this.getDonutById(id);
  }

  getDonutById(id:number) : void {
    this.donutApi.getDonutById(id).subscribe(
      (result) => {
        this.donut = result;
      }
    )
  }
}
