import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model/model.component';
import { ModelService } from '../services/model.service';



@NgModule({
  declarations: [
    ModelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModelComponent
  ],
  // providers:[
  //   ModelService
  // ]
})
export class SharedModule { 
 
}
