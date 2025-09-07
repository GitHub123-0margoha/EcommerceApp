import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Notification {
  notification: string[];
  counter: number = 0;


  constructor() {
    this.notification = [
      "Welcome to the Notification Service!",
      "You have new messages.",
      "Don't forget to check your notifications.",
      "",
      "Your settings have been updated.",
      "New updates are available.",
    ]
  }

  getNotification(): Observable<string> {
    return new Observable<string>(observer => {
      let interval = setInterval(() => {
        if (this.counter >= this.notification.length || this.notification[this.counter] === '') {
          observer.complete();
        } else {
          observer.next(this.notification[this.counter]);
          this.counter++;
        }

        return () => {
          clearInterval(interval)
        }
      }, 2000);
    });
  }
}
