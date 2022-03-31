import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpListComponent } from './ip-list/ip-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ValidListComponent } from './valid-list/valid-list.component';
import { BannedListComponent } from './banned-list/banned-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IpListComponent,
    NavbarComponent,
    ValidListComponent,
    BannedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
