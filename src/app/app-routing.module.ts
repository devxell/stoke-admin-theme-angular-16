import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout-components/layout/layout.component';
import { content } from './shared/routes/routes';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('src/app/component/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('src/app/component/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      }
    ],
  }
  // Vertical layout 
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./shared/shared.module').then((m) => m.SharedModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
