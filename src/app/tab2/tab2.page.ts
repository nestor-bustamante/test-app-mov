import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
 
export class Tab2Page {

  constructor(private router: Router) {}

  private getApi() {
    fetch('https://canales-dig-prd-api.azurewebsites.net/v1/movistar/switches/list/canal_app')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  getPostMessage() {
    const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    const eventer = window[eventMethod];
    const messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
    eventer(messageEvent, (e: any) => {
      if (e.data.url) {
        // falta type (e.data.type)
        console.log('e.data: ', e.data);
        this.router.navigate([`/${e.data.url}`]);
      }
    });
  }


  sendPostMessage(iframe: any, message: any) {
    iframe.postMessage(message, "*");
    console.log('sendPostMessage');
  }

  eventListener(token: string, responseBknd: string, iframe: HTMLIFrameElement) {
    this.sendPostMessage(iframe.contentWindow, {
      token: JSON.parse(token),
      responseBknd: JSON.parse(responseBknd)
    });
  }

  sendData() {

    const getResponseBknd = window.localStorage.getItem('responseBknd');
    const getToken = window.localStorage.getItem('token');
    const getIframe: any = document.querySelector('iframe.laura-widget-iframe');
    
    getIframe.addEventListener("load", this.eventListener(getToken, getResponseBknd, getIframe));

  }

  ngOnInit() {
    this.getPostMessage();
  }

}
