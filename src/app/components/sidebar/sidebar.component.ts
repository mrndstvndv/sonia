import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { compassOutline, folderOutline, homeOutline } from 'ionicons/icons';
import { LucideAngularModule, Play } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [CommonModule, IonIcon, LucideAngularModule]
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor() {
    addIcons({
      homeOutline,
      compassOutline,
      folderOutline
    })
  }


  readonly Play = Play;

  menuItems = [
    { name: 'Home', icon: 'home-outline' },
    { name: 'Playlists', icon: 'folder-outline' },
  ];

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
