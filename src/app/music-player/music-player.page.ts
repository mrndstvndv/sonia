import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonContent, IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { arrowBack, bookmarkOutline, playOutline, playSkipBackOutline, playSkipForwardOutline } from "ionicons/icons";

@Component({
  selector: 'music-player',
  templateUrl: 'music-player.page.html',
  standalone: true,
  imports: [IonContent, IonIcon, IonButton, RouterModule]
})
export class MusicPlayerPage {
  title = 'Music Player';
  song = {
    title: 'Reflect',
    artist: 'Gawr Gura',
    lyrics: [
      'Εκ λόγου άλλος εκβαίνει λόγος',
      '水面に映る自分が言った',
      '「ああ わたしは悪いサメです」',
      'ずっと恐れていた 赤く光るその目',
      '海の底 暗闇に消えていく',
      'どうして (Your tired eyes)',
      '落ちてゆく (Begin to fall)'
    ]
  };

  constructor() {
    addIcons({
      bookmarkOutline,
      arrowBack,
      playOutline,
      playSkipForwardOutline,
      playSkipBackOutline
    })
  }

  goBack() {
    window.history.back();
  }

  toggleBookmark() {
    console.log('Toggle bookmark');
  }

  previousTrack() {
    console.log('Previous track');
  }

  playPause() {
    console.log('Play/Pause');
  }

  nextTrack() {
    console.log('Next track');
  }
}
