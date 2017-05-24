import { Component }          from '@angular/core';
import {LoginService} from './service/login'

@Component({
  selector: 'my-app',
  templateUrl:'appComponent.html'
})
export class AppComponent {
  public title: string = "Blog";
  constructor(private _loginService:LoginService){
           
  }
}
