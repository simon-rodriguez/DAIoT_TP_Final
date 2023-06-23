import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispositivoPageRoutingModule } from './dispositivo-routing.module';

import { DispositivoPage } from './dispositivo.page';
import { MenuComponent } from '../menu/menu.component';
import { SharedModule } from '../pipes/shared-module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivoPageRoutingModule,
    MenuComponent,
    SharedModule
  ],
  declarations: [DispositivoPage]
})
export class DispositivoPageModule {}
