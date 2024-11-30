import { Component, Input } from '@angular/core';
import { IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-song-item',
  standalone: true,
  imports: [IonImg],
  template: `
    <div class="song-item">
      <ion-img [src]="imageUrl" alt="{{songName}} - {{artist}}"></ion-img>
      <div class="song-info">
        <h3>{{ songName }}</h3>
        <p>{{ artist }}</p>
      </div>
    </div>
  `,
  styles: [`
    .song-item {
      width: 120px;
    }
    ion-img {
      border-radius: 8px;
      margin-bottom: 8px;
    }
    .song-info h3 {
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .song-info p {
      font-size: 12px;
      color: var(--ion-color-medium);
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `]
})

export class SongItemComponent {
  @Input() imageUrl!: string;
  @Input() songName!: string;
  @Input() artist!: string;
}
