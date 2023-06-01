import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DonutDetailsComponent } from './donut-details/donut-details.component';
import { DonutsComponent } from './donuts/donuts.component';
import { Route, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FamouspeopleComponent } from './famouspeople/famouspeople.component';

const routes : Route[] = [
  { path:"", component: HomepageComponent, pathMatch: 'full'},
  { path:"donutDetails/:donut", component: DonutDetailsComponent },
  { path:"donuts", component: DonutsComponent},
  { path:"people", component: FamouspeopleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DonutDetailsComponent,
    DonutsComponent,
    HomepageComponent,
    FamouspeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
