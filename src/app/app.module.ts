import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.components'
import { EventThumbnailComponent } from './events/events-thumbnail.component'
import { NavBarComponent } from './nav/navbar.components'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],  
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
