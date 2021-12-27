import {Injectable} from '@angular/core';
import {servers} from "../shared/configuration";


@Injectable()
export class ErrorInterceptor  {
  connection = new WebSocket(servers.real);

  constructor() {
    this.intercept();
  }

  intercept() {
    this.connection.onerror = function (event) {
      console.log('HATA',event);
    }
  }

}
