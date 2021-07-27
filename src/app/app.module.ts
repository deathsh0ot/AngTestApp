import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    InsertComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"list", component:SelectComponent},
      {path:"create", component:InsertComponent},
      {path:"update", component:UpdateComponent},
      {path:"" ,component:SelectComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
