import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit{

  @ContentChildren(TabComponent) tabs : QueryList<TabComponent> = new QueryList<TabComponent>();
  
  ngAfterContentInit(): void {
    console.log("After Content Init hook Invoked")

    const activeTabs = this.tabs.filter(
      element => element.activeTab
    )

    if(!activeTabs || activeTabs.length === 0)
    {
      this.SelectTab(this.tabs.first);
    }
    //console.log(this.tabs); // Type of the tabs - QueryList
  }

 
  SelectTab(tab:TabComponent)
  {
    this.tabs.forEach(
      element => element.activeTab = false 
    )
    tab.activeTab = true;
    return false;
  }
  /*generateTabClass(tab : TabComponent) : string
  {
    console.log("generate class function called")
    if(tab.activeTab)
    {
      console.log(tab.tabTitle + " -" +tab.activeTab)
      return "hover:text-white text-white bg-indigo-400";
    }
    console.log(tab.tabTitle + " -" +tab.activeTab)
    return "hover:text-indigo-400";
  }*/
}
