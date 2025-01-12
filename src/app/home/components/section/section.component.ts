import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonCol, IonRow } from '@ionic/angular/standalone';
import { SongItemComponent } from 'src/app/components/song-item.component';
import { Section } from 'src/app/lib/types';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: 'section.component.scss',
  standalone: true,
  imports: [CommonModule, IonRow, IonCol, SongItemComponent]
})
export class SectionComponent {
  @Input() section!: Section;
  @Output() toggleSidebar = new EventEmitter<void>();
}
