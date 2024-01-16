import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('src/app/component/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  }
];