import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaincontentComponent } from './main-content/maincontent.component';
import { FooterComponent } from './shared/comonents/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaincontentComponent,
    FooterComponent,
    ImprintComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sakura';
}
