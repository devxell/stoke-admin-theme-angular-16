import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxColorsModule } from 'ngx-colors';

import { LayoutComponent } from './layout-components/layout/layout.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { BackToTopComponent } from './layout-components/back-to-top/back-to-top.component';
import { HeaderComponent } from './layout-components/header/header.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { FullscreenDirective } from './directive/fullscreen.directive';
import { HoverEffectSidebarDirective } from './directive/hover-effect-sidebar.directive';
import { SideMenuToggleDirective } from './directive/side-menu-toggle.directive';
import { ToggleThemeDirective } from './directive/toggle-theme.directive';
import { SwitcherComponent } from './layout-components/switcher/switcher.component';
import { PageHeaderComponent } from './layout-components/page-header/page-header.component';
import { NotificationsComponent } from './layout-components/notifications/notifications.component';
import { EmailNotificationsComponent } from './layout-components/email-notifications/email-notifications.component';
import { ShortcutsComponent } from './layout-components/shortcuts/shortcuts.component';
import { UserProfileNavComponent } from './layout-components/user-profile-nav/user-profile-nav.component';
import { FullScreenComponent } from './layout-components/full-screen/full-screen.component';
import { DarkLiteThemeComponent } from './layout-components/dark-lite-theme/dark-lite-theme.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    PageHeaderComponent,
    SidebarComponent,
    SwitcherComponent,
    BackToTopComponent,
    FullscreenDirective,
    HoverEffectSidebarDirective,
    SideMenuToggleDirective,
    ToggleThemeDirective,
    NotificationsComponent,
    EmailNotificationsComponent,
    ShortcutsComponent,
    UserProfileNavComponent,
    FullScreenComponent,
    DarkLiteThemeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    NgScrollbarModule,
    NgxColorsModule,
  ],
  exports:[
    PageHeaderComponent
  ]
})
export class SharedModule { }
