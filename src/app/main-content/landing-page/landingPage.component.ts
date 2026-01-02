import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <section>
      <app-navbar></app-navbar>
      <div>
        <h1 class="fontNatoSans">SAKURA RAMEN</h1>
        <h2 class="fontNatoSans">Best ramen in the town</h2>
      </div>
    </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}
