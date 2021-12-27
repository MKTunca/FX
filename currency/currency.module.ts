import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyComponent} from './currency.component';
import {RouterModule} from '@angular/router';
import {currencyRoutes} from './currency.routes';
import {HomeProvider} from '../_services/home.provider';
import {TranslateModule} from '@ngx-translate/core';
import { HaberComponent } from '../_components/haber/haber.component';
import { FooterComponent } from '../_components/footer/footer.component';
import { FooterModule } from '../_components/footer/footer.module';
import { FooterinfoComponent } from '../_components/footerinfo/footerinfo.component';
import { ClockComponent } from '../clock/clock.component';


@NgModule({
  declarations: [CurrencyComponent,HaberComponent,ClockComponent],
  exports: [CurrencyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(currencyRoutes),
    TranslateModule,
    FooterModule,
    
  ],
  providers: [
    HomeProvider
  ]
})
export class CurrencyModule {
}
