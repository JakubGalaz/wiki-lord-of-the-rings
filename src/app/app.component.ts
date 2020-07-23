import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wiki';

  constructor(private route: Router) {}

  goToHome(): void {
    this.route.navigateByUrl('/home');
  }
}
