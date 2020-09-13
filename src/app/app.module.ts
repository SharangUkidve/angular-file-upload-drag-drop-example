import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DragDropDirective } from './directives/drag-drop.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FileUploadComponent, DragDropDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
