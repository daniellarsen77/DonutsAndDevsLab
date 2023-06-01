import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from './people';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {

  peopleURL:string = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
  constructor(private http:HttpClient) { }

  getPeople() : Observable<People> {
    return this.http.get<People>(this.peopleURL);
  }

}
