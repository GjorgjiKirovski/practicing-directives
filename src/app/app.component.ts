import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicing-directives';

  paragraphToggle:Boolean = true;
  clickArray:Number[] = [];
  clickCounter = 0;

  togglePara(){
    if(this.paragraphToggle){
      this.paragraphToggle = false;
    }else{
      this.paragraphToggle = true;
    }
    this.clickCounter++;
    this.clickArray.push(this.clickCounter);
    console.log(this.clickArray);
  }
  
}
