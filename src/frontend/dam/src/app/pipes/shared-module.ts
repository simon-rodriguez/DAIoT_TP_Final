import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { EpochToDateTimePipe } from "./epoch-to-date-time.pipe";


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [EpochToDateTimePipe],
  // exports is required so you can access your component/pipe in other modules
  exports: [EpochToDateTimePipe]
})
export class SharedModule{}