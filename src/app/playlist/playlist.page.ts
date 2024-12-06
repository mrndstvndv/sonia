import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { menuOutline, searchOutline } from "ionicons/icons";
import { SidebarComponent } from "../components/sidebar/sidebar.component";

@Component({
    selector: 'playlist-page',
    templateUrl: './playlist.page.html',
    imports: [IonButton, IonIcon, RouterModule, SidebarComponent],
    standalone: true
})
export class PlaylistPage {
    constructor() {
        addIcons({
            menuOutline,
            searchOutline
        })
    }
    isSidebarOpen = false;

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }
}