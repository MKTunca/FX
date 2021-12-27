import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { newsComponent } from './news/news.component';
import {ROUTING} from './shared/routing';
import {NotFoundComponent} from './_components/not-found/not-found.component';

const routes: Routes = [

  {
    path: ROUTING.CURRENCY,
    loadChildren: () => import('./currency/currency.module').then((m) => m.CurrencyModule)
  },
  {
    path: ROUTING.GOLD,
    loadChildren: () => import('./gold/gold.module').then((m) => m.GoldModule)
  },
  {
    path:"news",
    component:newsComponent
  },
  {
    path:"clock",
    component:ClockComponent
  },
  {
    path: ROUTING.UYUM,
    component: NotFoundComponent,
    canActivate: [],
    data: {
      breadcrumb: 'Hata',
    }
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ROUTING.CURRENCY
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
