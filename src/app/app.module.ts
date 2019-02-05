import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent,
  EventThumbnailComponent,
  EventService,
  VoterService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe, 
  LocationValidator,
  UpvoteComponent, 
  EventResolver} from './events/index'
import { JQ_TOKEN, 
  TOASTR_TOKEN, 
  Toastr, 
  CollapsibleWellComponent, 
  SimpleModalComponent,
  ModalTriggerDirective } from './common/index';
import { NavBarComponent } from './nav/navbar.components'
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe,
    UpvoteComponent
  ],  
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, useValue: toastr }, 
    { provide: JQ_TOKEN, useValue: jQuery }, 
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if(component.isDirty)
     return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}
