import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicing-directives';

  paragraphToggle:Boolean = true;
  clickLog: any[] = [];

  togglePara(){
    this.paragraphToggle = !this.paragraphToggle;
    this.clickLog.push(new Date());
  }
  
}
