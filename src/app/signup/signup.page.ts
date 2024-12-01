import { Component } from '@angular/core';
import { LucideAngularModule, Play, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-signuup',
  templateUrl: 'signup.page.html',
  standalone: true,
  imports: [LucideAngularModule],
})

export class SignupPage {
  constructor() { }

  readonly Facebook = Facebook;
  readonly Play = Play;
}
