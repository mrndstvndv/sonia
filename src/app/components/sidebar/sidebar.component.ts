import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { compassOutline, folderOutline, homeOutline } from 'ionicons/icons';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [CommonModule, IonIcon]
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

    menuItems = [
        { name: 'Home', icon: 'home-outline' },
        { name: 'Explore', icon: 'compass-outline' },
        { name: 'Library', icon: 'folder-outline' },
    ];

    onToggleSidebar() {
        this.toggleSidebar.emit();
    }
}