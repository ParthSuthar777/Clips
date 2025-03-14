import { Injectable } from '@angular/core';


interface IModel{
  id:string,
  visible:boolean
}

@Injectable({
  providedIn: 'root' // Option:1 - Globally Available , Just need to add through Dependancy Injection
})
//@Injectable() // Option:2 - To use the , use the provided directive and then use the DI

//Interface

export class ModelService {

  private model : IModel[] = [];
  constructor() { }

  register(id:string)
  {
    this.model.push({
     id,
     visible : false 
    });
  }
  isModelOpen(id:string) : boolean
  {
    return !! this.model.find(element => element.id === id)?.visible
  }

  toggleVisibility(id : string)
  {
    const model = this.model.find(element => element.id === id)

    if(model)
    {
      model.visible = !model.visible;
    }
  }
}
