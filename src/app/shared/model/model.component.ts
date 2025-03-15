import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  
  @Input() modelId : string = "";

  constructor(public model: ModelService, public el : ElementRef ) {
    console.log("visibility Flag:" + this.model.isModelOpen("auth"));
  }

  ngOnInit(): void {
    /* Element ref is being to separate out the component from parent, so their parent component's
    css property not been applied to child */
   document.body.appendChild(this.el.nativeElement)
  }

  closeModel()
  {
    this.model.toggleVisibility(this.modelId);
  }
}
