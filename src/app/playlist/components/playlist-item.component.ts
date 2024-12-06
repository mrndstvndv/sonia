import { Component, computed, input, Input } from "@angular/core";
import { addIcons } from "ionicons";
import { shareSocialOutline } from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'playlist-item',
  standalone: true,
  imports: [IonButton, IonIcon],
  templateUrl: 'playlist-item.component.html',
})
export class PlaylistItem {
  @Input() imageUrl!: string;
  @Input() playlistName!: string;
  @Input() tracks!: number;
  duration = input('', { transform: (value: number) => this.convertSeconds(value) });

  constructor() {
    addIcons({
      shareSocialOutline
    })
  }

  convertSeconds(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes !== 1 ? 's' : ''}`;
    } else {
      return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
  }
}