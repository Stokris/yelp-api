import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Observable } from 'rxjs';

const APIKEY = environment.APIKEY
const httpOptions = {
  headers: new HttpHeaders ({ 'x-requested-with': 'https://cors-anywhere.herokuapp.com/', 'Authorization': APIKEY, 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getBusiness(cost, city):Observable<any> {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&price=${cost}`,  httpOptions)
  }
}
