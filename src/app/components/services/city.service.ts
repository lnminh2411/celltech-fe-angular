import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }
  public getDataFromJson(jsonUrl: string): Observable<any> {
    return this.httpClient.get<any>(jsonUrl);
  }
}
