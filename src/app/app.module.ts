import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';

 
import { HttpClientModule }   from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
 

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule],
    declarations: [ AppComponent, ModalComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }