import { Component } from "@angular/core";
import { IonButton, IonIcon, IonContent, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonButtons } from "@ionic/angular/standalone"
import { addIcons } from "ionicons";
import { add, chevronBackSharp } from "ionicons/icons";
import { PlaylistItem } from "./components/playlist-item.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: "playlists-page",
    templateUrl: "playlists.page.html",
    standalone: true,
    imports: [IonButton, IonIcon, PlaylistItem, CommonModule]
})
export class PlaylistsPage {
    playlists = [
        { name: "Playlist 1", tracks: 10, duration: 69, imageUrl: "/assets/songs/blue.jpg" },
        { name: "Playlist 2", tracks: 5, duration: 42, imageUrl: "/assets/songs/blue.jpg" },
        { name: "Playlist 3", tracks: 15, duration: 120, imageUrl: "/assets/songs/blue.jpg" }
    ]

    constructor() {
        addIcons({
            chevronBackSharp,
            add
        })
    }

    goBack() {
        window.history.back();
    }
}