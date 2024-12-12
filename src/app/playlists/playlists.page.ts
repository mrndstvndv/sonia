import { Component } from "@angular/core";
import { IonButton, IonIcon } from "@ionic/angular/standalone"
import { addIcons } from "ionicons";
import { add, chevronBackSharp } from "ionicons/icons";
import { PlaylistItem } from "./components/playlist-item.component";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { playlists } from "../data";
import { Router } from "@angular/router";

@Component({
  selector: "playlists-page",
  templateUrl: "playlists.page.html",
  standalone: true,
  imports: [IonButton, IonIcon, PlaylistItem, CommonModule, SidebarComponent]
})
export class PlaylistsPage {
  playlists = playlists

  isSidebarOpen = false;

  constructor(private router: Router) {
    addIcons({
      chevronBackSharp,
      add
    })
  }

  playlistClicked(index: number) {
    this.router.navigate(['playlist'], {queryParams: {index: index}})
  }

  goBack() {
    window.history.back();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
