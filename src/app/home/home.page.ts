import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonButton, IonIcon, IonRow, IonCol } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { menuOutline, searchOutline } from "ionicons/icons";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { SectionComponent } from "./components/section/section.component";
import { SongItemComponent } from "../components/song-item.component";
import { CommonModule } from "@angular/common";
import { songs } from "../data";
import { Section } from "../lib/types";

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrl: 'home.page.scss',
  imports: [IonButton, IonIcon, RouterModule, SidebarComponent, SectionComponent, SongItemComponent, IonRow, IonCol, CommonModule],
  standalone: true
})
export class HomePage {
  isSidebarOpen = false;
  sections: Section[] = [];

  popularSongs = songs
  recentlyListened = [
    {
      songName: "Twinkling Ash",
      artist: "Regallily",
      imageUrl: "/assets/songs/twinklingash.jpg"
    }
  ];

  async getHomePage() {
    console.log("test")
    const res = await fetch("http://localhost:3000/homePage");
    const data = await res.json();
    this.sections = data as Section[];
    console.log(this.sections);
  }

  constructor() {
    addIcons({
      menuOutline,
      searchOutline
    })

    this.getHomePage()
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
