import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject, debounceTime, fromEvent, takeUntil } from 'rxjs';

export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: any;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  items?: any;
}

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    {
      title: 'Dashboard',
      selected: false,
      icon: 'home',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/dashboard/sales-dashboard',
          title: 'Sales Dashboard',
          type: 'link',
          selected: false,
        },
        {
          path: '/dashboard/marketing-dashboard',
          title: 'Marketing Dashboard',
          type: 'link',
          selected: false,
        }
      ],
    }
    
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
