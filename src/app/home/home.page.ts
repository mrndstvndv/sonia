import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonButton, IonIcon, IonRow, IonCol } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { menuOutline, searchOutline } from "ionicons/icons";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { SongItemComponent } from "../components/song-item.component";
import { CommonModule } from "@angular/common";
import { songs } from "../data";
import { SearchComponent } from "./components/search.component";

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrl: 'home.page.scss',
  imports: [IonButton, IonIcon, RouterModule, SidebarComponent, SongItemComponent, IonRow, IonCol, CommonModule, SearchComponent],
  standalone: true
})
export class HomePage {
  isSidebarOpen = false;

  popularSongs = songs
  recentlyListened = [
    {
      songName: "Twinkling Ash",
      artist: "Regallily",
      imageUrl: "/assets/songs/twinklingash.jpg"
    }
  ];

  constructor() {
    addIcons({
      menuOutline,
      searchOutline
    })
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
