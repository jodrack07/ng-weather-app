import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherInterface } from '../../types/weather.interface';

@Component({
  selector: 'wa-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  cityName: string = 'goma';
  weatherData?: WeatherInterface;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDateByCity(this.cityName);
    this.cityName = '';
  }

  onSubmit(): void {
    this.getWeatherDateByCity(this.cityName);
    this.cityName = '';
  }

  private getWeatherDateByCity(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe((response) => {
      this.weatherData = response;
      console.log(this.weatherData);
    });
  }
}
