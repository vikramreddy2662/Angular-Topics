import { Component, ViewEncapsulation } from '@angular/core';
import { Service } from './Services/Services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 // providers:[Service]
})
export class AppComponent {
  title = 'AngularServices';
 
}
