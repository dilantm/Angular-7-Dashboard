import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';
import { GlobalService } from './services/global.service';
import { MenuComponent } from './layouts/menu/menu.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { PagesTopComponent } from './layouts/pages-top/pages-top.component';
import { ContentTopComponent } from './layouts/content-top/content-top.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RightConfigComponent } from './layouts/right-config/right-config.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
],
providers: [
    GlobalService
],
declarations: [
    MenuComponent,
    SidebarComponent,
    PagesTopComponent,
    ContentTopComponent,
    NotificationComponent,
    RightConfigComponent,
    LoadingComponent
],
exports: [
    SidebarComponent,
    PagesTopComponent,
    ContentTopComponent,
    NotificationComponent,
    RightConfigComponent,
    LoadingComponent
]
})
export class LayoutModule { }
