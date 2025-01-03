import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-user',
  templateUrl: './recent-user.component.html',
  styleUrls: ['./recent-user.component.scss']
})
export class RecentUserComponent {
  recentChats = [
    { user: 'Alice', message: 'Hello!' },
    { user: 'Bob', message: 'How are you?' },
    { user: 'Charlie', message: 'Good morning!' }
  ]; // Example recent chats
}
