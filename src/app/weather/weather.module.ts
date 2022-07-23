import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './features/weather/weather.component';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: '**',
    redirectTo: 'weather',
  },
];

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
})
export class WeatherModule {}
