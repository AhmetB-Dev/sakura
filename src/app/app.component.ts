import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaincontentComponent } from './main-content/maincontent.component';
import { FindUsAtComponent } from './main-content/find-us-at/find-us-at.component';
import { FooterComponent } from './shared/comonents/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MaincontentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sakura';
}
