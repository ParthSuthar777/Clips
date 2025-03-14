import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    var video: any = document.getElementById('background-video');
    if (video) {
      const playPromise = video.play() || Promise.reject('');
      playPromise.then(() => {
      }).catch((err: any) => {
        video.muted = true;
        video.play();
      });
    }
  }
  title = 'Clips';
}

