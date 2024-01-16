import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          title: 'Admin-Dashboard',
          pathMatch:'full',
          component: DashboardComponent,
        },
        {
            path: 'admin-dashboard',
            title: 'Admin-Dashboard',
            pathMatch:'full',
            component: DashboardComponent,
          }
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule {}
  