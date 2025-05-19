import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './components/links/links.component';
import { HttpClientModule } from '@angular/common/http';
import { CurriculoPdfComponent } from './components/curriculo-pdf/curriculo-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinksComponent,
    CurriculoPdfComponent
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
