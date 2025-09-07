import { Notification } from './../../services/notification';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit , OnDestroy {
  subscribtion: Subscription;

  constructor(private _notification:Notification) {
    this.subscribtion = this._notification.getNotification().subscribe({

    })
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
  ngOnInit(): void {
    this._notification.getNotification().subscribe({
      next: (notifiction) => {console.log(notifiction);},
      error: (error) => {console.error('Error:', error);},
      complete: () => {console.log('All notifications have been sent.');}
    });
  }


}
