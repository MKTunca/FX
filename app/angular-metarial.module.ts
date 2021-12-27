import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';

@NgModule({
  imports: [
    MatDialogModule
  ],
  exports: [
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule
  ],
})

export class AngularMaterialModule {
}
