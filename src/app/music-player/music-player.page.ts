import { Component, ViewChild, ElementRef, signal, WritableSignal, computed, Signal } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { arrowBack, bookmarkOutline, pauseOutline, playOutline, playSkipBackOutline, playSkipForwardOutline } from "ionicons/icons";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { Song, formatTime, songs } from "../data";
import { CommonModule } from "@angular/common";
import { extractColors } from "extract-colors";
import { Pi } from "lucide-angular";

@Component({
  selector: 'music-player',
  templateUrl: 'music-player.page.html',
  styleUrl: 'music-player.page.scss',
  standalone: true,
  imports: [IonIcon, IonButton, RouterModule, SidebarComponent, CommonModule]
})
export class MusicPlayerPage {
  title = 'Music Player';

  song: Song = songs[0];
  bgColor = "";
  playing = false;

  isSidebarOpen = false;

  audio = new Audio("/assets/songs/reflect.opus");
  duration: WritableSignal<number> = signal(0)
  durationDisplay: Signal<string> = computed(() => formatTime(this.duration()))
  currentTime = signal(0)
  currentTimeDisplay: Signal<string> = computed(() => formatTime(this.currentTime()))

  constructor(private router: ActivatedRoute) {
    this.audio.preload = "metadata"
    this.audio.addEventListener("loadedmetadata", () => {
      this.duration.set(this.audio.duration)
    })

    this.audio.ontimeupdate = (_: Event) => {
      this.currentTime.set(this.audio.currentTime)
    }

    addIcons({
      bookmarkOutline,
      arrowBack,
      pauseOutline,
      playOutline,
      playSkipForwardOutline,
      playSkipBackOutline,
    })
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      const p = params as { name: string }
      const song = songs.find(song => song.songName == p.name)
      if (song !== undefined) {
        this.song = song

        extractColors(song.imageUrl).then(colors => {
          this.bgColor = colors[2].hex
          console.log(this.bgColor)
        })
      }
    })
  }

  inputUpdate(event: Event) {
    this.currentTime.set(Number.parseInt((event.target as HTMLInputElement).value))
    this.audio.currentTime = this.currentTime()
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  goBack() {
    window.history.back();
  }

  toggleBookmark() {
    console.log('Toggle bookmark');
  }

  previousTrack() {
    console.log('Previous track');
  }

  playPause() {
    if (this.playing) {
      this.audio.pause()
    } else {
      this.audio.play()
    }

    this.playing = !this.playing
  }

  nextTrack() {
    console.log('Next track');
  }
}
