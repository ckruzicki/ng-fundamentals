import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.components'
import { EventThumbnailComponent } from './events/events-thumbnail.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],  
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
