import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonCol, IonIcon, IonRow } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { menu, search } from 'ionicons/icons';
import { SongItemComponent } from '../components/song-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrl: 'home.page.scss',
  standalone: true,
  imports: [IonIcon, IonButton, IonCol, IonRow, SongItemComponent, CommonModule]
})
export class HomePage {

  popularSongs = [
    {
      songName: "Reflect",
      artist: "Gawr Gura",
      imageUrl: "/assets/songs/reflect.jpg"
    },
    {
      songName: "With A Smile",
      artist: "Eraserheads",
      imageUrl: "/assets/songs/eraser.jpg"
    },
    {
      songName: "Blue",
      artist: "yung kai",
      imageUrl: "/assets/songs/blue.jpg"
    },
  ];

  recentlyListened = [
    {
      songName: "Twinkling Ash",
      artist: "Regallily",
      imageUrl: "/assets/songs/twinklingash.jpg"
    }
  ];

  constructor() {
    addIcons({
      menu,
      search
    })
  }
}
