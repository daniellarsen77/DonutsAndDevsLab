import { Component } from '@angular/core';
import { People } from '../people';
import { PeopleApiService } from '../people-api.service';

@Component({
  selector: 'app-famouspeople',
  templateUrl: './famouspeople.component.html',
  styleUrls: ['./famouspeople.component.css']
})
export class FamouspeopleComponent {

  people : People = {} as People;
  constructor(private peopleApi:PeopleApiService) {
    this.getPeople();
  }
  getPeople() : void {
    this.peopleApi.getPeople().subscribe(
      (result) => {
        this.people = result;
      }
    );
  }
}
