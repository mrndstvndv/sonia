import { Component, EventEmitter, input, Input, Output } from "@angular/core";
import { addIcons } from "ionicons";
import { closeOutline, shareSocialOutline } from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'playlist-song-item',
  standalone: true,
  imports: [IonButton, IonIcon],
  templateUrl: 'playlist-song-item.component.html',
})
export class PlaylistSongItem {
  @Input() imageUrl!: string;
  @Input() songName!: string;
  @Input() artist!: string;
  @Output() onDelete = new EventEmitter<void>()
  duration = input('', { transform: (value: number) => this.convertSeconds(value) });

  constructor() {
    addIcons({
      shareSocialOutline,
      closeOutline
    })
  }

  onClick() {
    this.onDelete.emit()
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
