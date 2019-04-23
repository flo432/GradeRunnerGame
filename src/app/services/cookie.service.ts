import { Injectable } from '@angular/core';
import {Cookie} from "ng2-cookies";

@Injectable()
export class CookieService {

  constructor() { }

  public setCookie(key: string, value){

    Cookie.set(key, btoa(JSON.stringify(value)), 365);
  }

  public getCookie(key: string){
    console.log(Cookie.get(key));
    console.log(atob(Cookie.get(key)));
    console.log(JSON.parse(atob(Cookie.get(key))));
     return JSON.parse(atob(Cookie.get(key)));
  }

  public isSet(key: string){
    if(Cookie.check(key) == true){
      return true;
    }
    else {
      return false;
    }
  }

  public deleteCookie(key: string){
    Cookie.delete(key);
  }

}
