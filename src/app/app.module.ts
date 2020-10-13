
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { AppBreadcrumbComponent } from './layouts/full/breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { mailService,mailGlobalVariable } from './apps/mailbox/mail.service';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { UIPagesComponent } from './ui-pages/ui-pages.component';
import { LoginComponent } from './ui-pages/login/login.component';

import { BreadcrumbComponent } from './UI-Pages/layouts/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './UI-Pages/layouts/header/header.component';
import { SidebarComponent } from './UI-Pages/layouts/sidebar/sidebar.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};

@NgModule({
    declarations: [
        AppComponent,
        FullComponent,
        AppHeaderComponent,
        SpinnerComponent,
        AppBlankComponent,
        AppSidebarComponent,
        AppBreadcrumbComponent,
        UIPagesComponent,
        LoginComponent,
       
        BreadcrumbComponent,
        HeaderComponent,
        SidebarComponent,
      
     
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DemoMaterialModule, 
        FormsModule,
        FlexLayoutModule,
        HttpClientModule,
        PerfectScrollbarModule,
        SharedModule,
        ReactiveFormsModule,
        NgMultiSelectDropDownModule.forRoot(),
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG, 
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, mailService,mailGlobalVariable
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
