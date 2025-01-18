import { Component } from "@angular/core";
import { IonButton, IonIcon } from "@ionic/angular/standalone"
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { playlists } from "../data";
import { Router } from "@angular/router";

@Component({
  selector: "profile-page",
  templateUrl: "profile.page.html",
  standalone: true,
  imports: [IonButton, IonIcon, CommonModule, SidebarComponent]
})
export class ProfilePage {
  playlists = playlists

  isSidebarOpen = false;

  constructor(private router: Router) {
  }

  goBack() {
    window.history.back();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
