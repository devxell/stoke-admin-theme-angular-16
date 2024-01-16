import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
// layoutType: any;

  // public config = {
  //   settings: {
  //     layout: 'vertical',
  //     layout_type: 'ltr',
  //     layout_version: 'light',
  //   },
  //   color: {
  //     primary_color: '#7366ff',
      
  //   },
  // };
  constructor() {
    // if (this.config.settings.layout_type == 'rtl')
    //   document
    //     .getElementsByTagName('html')[0]
    //     .setAttribute('dir', this.config.settings.layout_type);

    // document.documentElement.style.setProperty(
    //   '--theme-deafult',
    //   this.config.color.primary_color
    // );
  }
  //Sidebar Notification
  private emitSidebarNofitSource = new Subject<any>();
  SidebarNotifyChangeEmitted = this.emitSidebarNofitSource.asObservable();
  emitSidebarNotifyChange(change: any) {
    this.emitSidebarNofitSource.next(change);
  }
  //Switcher
  private emitSwitcherSource = new Subject<any>();
  SwitcherChangeEmitted = this.emitSwitcherSource.asObservable();
  emitSwitcherChange(change: any) {
    this.emitSwitcherSource.next(change);
  }
}
