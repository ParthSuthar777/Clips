import { Component, Input } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  
  @Input() modelId : string = "";
  constructor(public model: ModelService ) {
    console.log("visibility Flag:" + this.model.isModelOpen("auth"));
  }

  closeModel()
  {
    this.model.toggleVisibility(this.modelId);
  }
}
