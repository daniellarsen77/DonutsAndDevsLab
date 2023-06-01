import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donut, Donuts } from './donut';

@Injectable({
  providedIn: 'root'
})
export class DonutApiService {

  donutURL:string = "https://grandcircusco.github.io/demo-apis/";
  constructor(private http:HttpClient) { }

  getDonuts() : Observable<Donuts> {
    return this.http.get<Donuts>(this.donutURL + "donuts.json");
  }
  getDonutById(id:number) : Observable<Donut> {
    return this.http.get<Donut>(this.donutURL + "/donuts/" + id + ".json");
  }
}
