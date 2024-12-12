import { Component, EventEmitter, input, Input, Output } from "@angular/core";
import { addIcons } from "ionicons";
import { shareSocialOutline } from "ionicons/icons";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { Playlist } from "src/app/data";

@Component({
  selector: 'playlist-item',
  standalone: true,
  imports: [IonButton, IonIcon],
  templateUrl: 'playlist-item.component.html',
})
export class PlaylistItem {
  @Input() playlist!: Playlist;
  @Output() click = new EventEmitter<void>()
  duration = input('', { transform: (value: number) => this.convertSeconds(value) });

  constructor() {
    addIcons({
      shareSocialOutline
    })
  }

  onClick() {
    this.click.emit()
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
