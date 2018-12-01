import {Component, OnInit} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';

declare var global: any;

@Component({
  selector: 'app-public-chat',
  templateUrl: './public-chat.component.html',
  styleUrls: ['./public-chat.component.css']
})
export class PublicChatComponent implements OnInit {

  private serverUrl = 'http://localhost:8080/socket';
  private stompClient;

  name: string;
  nameEnterd: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/chat', (message) => {
        if (message.body) {
          $('.chat').append('<div class="ui cards" style="margin-left: 1%; margin-top: 1%">\n' +
            '  <div class="card">\n' +
            '    <div class="content">\n' +
            '      <div class="header">' + 'Kushan' + '</div>\n' +
            '      <div class="description" style="font-size: 14px">\n'
            + message.body +
            '      </div>\n' +
            '    </div>\n' +
            '  </div>' +
            '</div>');
        }
      });
    });
  }

  setName(name: string): void {
    this.name = name;
    this.nameEnterd = !this.nameEnterd;
  }

  sendMessage(message): void {
    this.stompClient.send('/app/send/message', {}, message);
    $('#txtMsg').val('');
  }
}
