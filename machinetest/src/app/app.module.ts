import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
