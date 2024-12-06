import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonButton, IonIcon, IonRow, IonCol } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { menuOutline, searchOutline } from "ionicons/icons";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { SongItemComponent } from "../components/song-item.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    imports: [IonButton, IonIcon, RouterModule, SidebarComponent, SongItemComponent, IonRow, IonCol, CommonModule],
    standalone: true
})
export class HomePage {
    isSidebarOpen = false;

    popularSongs = [
        {
            songName: "Reflect",
            artist: "Gawr Gura",
            imageUrl: "/assets/songs/reflect.jpg"
        },
        {
            songName: "With A Smile",
            artist: "Eraserheads",
            imageUrl: "/assets/songs/eraser.jpg"
        },
        {
            songName: "Blue",
            artist: "yung kai",
            imageUrl: "/assets/songs/blue.jpg"
        },
    ];

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