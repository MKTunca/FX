import {Routes} from '@angular/router';
import {CurrencyComponent} from './currency.component';
import { newsComponent } from '../news/news.component';
import { Component } from '@angular/core';
export const currencyRoutes: Routes = [
  {
    path: '',
    component: CurrencyComponent
  }
];
