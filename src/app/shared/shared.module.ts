import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model/model.component';
import { ModelService } from '../services/model.service';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    ModelComponent,
    TabsContainerComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModelComponent,
    TabsContainerComponent,
    TabComponent
  ],
  // providers:[
  //   ModelService
  // ]
})
export class SharedModule { 
 
}
