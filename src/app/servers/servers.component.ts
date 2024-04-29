import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  allowResetUserName = false;
  serverCreationStatus = 'no server was created';
  serverName = 'enter your server name';
  userName = 'enter your username';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created, name: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    console.log(event.target.value)
  }

  onResetUserName() {
    if (this.userName !== '') {
      this.allowResetUserName = true;
      this.userName = '';

    }
  }




}
