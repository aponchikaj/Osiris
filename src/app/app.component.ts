import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  IsNormal:boolean = true
  IsMenu:boolean = false

  OpenMenu(){
    this.IsNormal = false
    this.IsMenu = true
  }
  CloseMenu(){
    this.IsNormal = true
    this.IsMenu = false
  }
}
