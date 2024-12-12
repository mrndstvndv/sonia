import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonButton, IonIcon, IonRow, IonCol } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { addOutline, chevronBackSharp, menuOutline, searchOutline } from "ionicons/icons";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { SongItemComponent } from "../components/song-item.component";
import { CommonModule } from "@angular/common";
import { songs } from "../data";
import { PlaylistSongItem } from "./components/playlist-song-item.component";

@Component({
  selector: 'playlist-page',
  templateUrl: './playlist.page.html',
  imports: [IonButton, IonIcon, RouterModule, SidebarComponent, SongItemComponent, IonRow, IonCol, CommonModule, PlaylistSongItem],
  standalone: true
})
export class PlaylistPage {
  isSidebarOpen = false;

  songs = songs

  constructor() {
    addIcons({
      menuOutline,
      searchOutline,
      addOutline,
      chevronBackSharp
    })
  }

  goBack() {
    window.history.back();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
