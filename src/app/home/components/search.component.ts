import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { searchOutline } from "ionicons/icons";
import { Song, songs } from "src/app/data";
import { PlaylistSongItem } from "src/app/playlist/components/playlist-song-item.component";

@Component({
  selector: "app-search",
  standalone: true,
  templateUrl: "search.component.html",
  imports: [IonIcon, FormsModule, CommonModule, PlaylistSongItem]
})
export class SearchComponent {
  constructor(private router: Router) {
    addIcons({
      searchOutline
    })
  }

  query: string = ""
  items: Song[] = [];
  dialog: HTMLDialogElement | null = null

  toggleDialog(): void {
    if (this.dialog == null) {
      console.error("Dialog is not initialized yet")
      return
    }

    this.dialog.open = !this.dialog.open
  }

  onInputChange(): void {
    if (!this.query?.trim()) {
      this.dialog!.open = false
      return;
    }

    this.items = songs.filter(item =>
      item.songName.toLowerCase().includes(this.query.toLowerCase())
    );

    this.dialog!.open = this.items.length > 0;
  }

  onBlur(event: FocusEvent): void {
    console.log(event)
    if (!this.dialog?.contains(event.relatedTarget as Node)) {
      this.dialog!.open = false;
    }
  }

  openSong(name: string): void {
    this.router.navigate(['music-player'], { queryParams: { name: name } })
  }

  onFocus(): void {
    if (this.items.length > 0) {
      this.dialog!.open = true;
    }
  }

  ngOnInit(): void {
    this.dialog = document.getElementById("search-results") as HTMLDialogElement
  }
}
