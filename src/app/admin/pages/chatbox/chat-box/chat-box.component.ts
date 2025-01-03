import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent {
  messages = [
    { user: 'Alice', text: 'Hello!' },
    { user: 'Bob', text: 'Hi!' }
  ];
  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ user: 'you', text: this.newMessage });
      this.newMessage = '';
    }
  }
}
