import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoldComponent} from './gold.component';
import {RouterModule} from '@angular/router';
import {goldRoutes} from './gold.routes';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [GoldComponent],
  exports: [GoldComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(goldRoutes),
    TranslateModule
  ]
})
export class GoldModule {
}
