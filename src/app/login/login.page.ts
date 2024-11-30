import { Component } from '@angular/core';
import { LucideAngularModule, Play, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  standalone: true,
  imports: [LucideAngularModule],
})

export class LoginPage {
  constructor() { }

  readonly Facebook = Facebook;
  readonly Play = Play;
}
