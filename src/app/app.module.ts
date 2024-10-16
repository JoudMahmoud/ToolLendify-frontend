import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ToolListComponent } from './components/tool-list/tool-list.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { SideBarComponent } from './components/core/side-bar/side-bar.component';
import { OwnerComponent } from './components/owner/owner.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddressSideBarComponent } from './components/core/address-side-bar/address-side-bar.component';
import { AddressComponent } from './components/address/address.component';
import { AddressInformationComponent } from './components/add-tool/address-information/address-information.component';
import { ReviewComponent } from './components/add-tool/review/review.component';
import { ToolInformationComponent } from './components/add-tool/tool-information/tool-information.component';
import { AddToolLayoutComponent } from './layouts/add-tool-layout/add-tool-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ToolListComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    OwnerComponent,
    SettingsComponent,
    AddressSideBarComponent,
    AddressComponent,
    ToolInformationComponent,
    AddressInformationComponent,
    ReviewComponent,
    AddToolLayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
