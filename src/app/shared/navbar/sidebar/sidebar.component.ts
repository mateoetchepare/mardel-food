import { Component, EventEmitter, Output } from '@angular/core';
import { LogInService } from 'src/app/log-in/log-in.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: `sidebar.component.html`,
})
export class SidebarComponent { 

  @Output()
  public closeSidebar: EventEmitter<string> = new EventEmitter<string>();

  constructor(protected logInService: LogInService) {

    
  }

  emitClose() {
    this.closeSidebar.emit('');
  }
}
