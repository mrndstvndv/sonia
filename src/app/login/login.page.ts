import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, Play, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  standalone: true,
  imports: [LucideAngularModule],
})

export class LoginPage {
  constructor(private router: Router) { }

  readonly Facebook = Facebook;
  readonly Play = Play;

  onClick() {
    this.router.navigate(['home'])
  }
}
