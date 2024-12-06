import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class SidebarComponent {
    @Input() isOpen: boolean = false;
    @Output() toggleSidebar = new EventEmitter<void>();

    menuItems = [
        { name: 'Dashboard', icon: 'home' },
        { name: 'Profile', icon: 'user' },
        { name: 'Messages', icon: 'mail' },
        { name: 'Settings', icon: 'settings' },
    ];

    onToggleSidebar() {
        this.toggleSidebar.emit();
    }
}