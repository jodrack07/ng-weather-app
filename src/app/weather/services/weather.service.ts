import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherInterface } from '../types/weather.interface';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherInterface> {
    return this.http.get<WeatherInterface>(environment.apiUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
