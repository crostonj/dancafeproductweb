import { Component } from '@angular/core';
import { MyMonitoringService } from '../Services/logging/MonitoringService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MicroProduct';

  constructor(private myMonitoringService: MyMonitoringService) {}

}
