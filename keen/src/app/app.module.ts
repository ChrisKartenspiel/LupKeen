import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShareButtonsModule} from 'ngx-sharebuttons';

import { AppComponent } from './app.component';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { CreatorComponent } from './creator/creator.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogEditorComponent } from './dialog-editor/dialog-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CreatorComponent,
    DialogDeleteComponent,
    DialogEditorComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    DialogDeleteComponent,
    DialogEditorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
