import { Component, computed } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { addOutline, chevronBackSharp, menuOutline, searchOutline } from "ionicons/icons";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { CommonModule } from "@angular/common";
import { Playlist, playlists, songs } from "../data";
import { PlaylistSongItem } from "./components/playlist-song-item.component";

@Component({
  selector: 'playlist-page',
  templateUrl: './playlist.page.html',
  imports: [IonButton, IonIcon, RouterModule, SidebarComponent, CommonModule, PlaylistSongItem],
  standalone: true
})
export class PlaylistPage {
  isSidebarOpen = false;

  playlist: null | Playlist = null;
  songs = computed(() => this.playlist?.songs || []);

  constructor(private activatedRoute: ActivatedRoute) {
    addIcons({
      menuOutline,
      searchOutline,
      addOutline,
      chevronBackSharp
    })
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const p = params as { index: number }
      this.playlist = playlists[p.index]
    }
    )
  }

  onDelete(index: number) {
    if (index > -1) {
      this.songs().splice(index, 1)
    }
  }

  goBack() {
    window.history.back();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
