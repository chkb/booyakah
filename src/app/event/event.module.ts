import { NgModule } from '@angular/core';

import { EventEditComponent } from './event-edit/event-edit.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventViewComponent } from './event-view/event-view.component';

@NgModule({
  declarations: [
    EventListComponent,
    EventEditComponent,
    EventViewComponent
  ],
  exports: [
    EventListComponent,
    EventEditComponent,
    EventViewComponent
  ],
  providers: [],
  bootstrap: []
})

export class EventModule { }
