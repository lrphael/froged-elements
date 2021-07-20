import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private environmentUrl = '';

  constructor(private httpClient: HttpClient) {
    this.environmentUrl = environment.apiUrl;
  }

  private getDefaultHeader(token?) {
    return {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        authorization: token || ''
      })
    }; 
  }

  public getAllPlanets() {
    return this.httpClient.get(`${this.environmentUrl}/planets/`, this.getDefaultHeader());
  }

  public getPlanetById(planet_id) {
    return this.httpClient.get(`${this.environmentUrl}/planets/${planet_id}`, this.getDefaultHeader());
  }

  public getAllPeople() {
    return this.httpClient.get(`${this.environmentUrl}/people/`, this.getDefaultHeader());
  }

  public getPersonById(person_id) {
    return this.httpClient.get(`${this.environmentUrl}/people/${person_id}`, this.getDefaultHeader());
  }

  public getAllStarShips() {
    return this.httpClient.get(`${this.environmentUrl}/starships/`, this.getDefaultHeader());
  }

  public getStarShipById(star_ship_id) {
    return this.httpClient.get(`${this.environmentUrl}/starships/${star_ship_id}`, this.getDefaultHeader());
  }


}