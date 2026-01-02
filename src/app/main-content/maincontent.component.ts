import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { OurmenuComponent } from './our-menu/ourmenu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { FindUsAtComponent } from './find-us-at/find-us-at.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    OurmenuComponent,
    HowToOrderComponent,
    FindUsAtComponent,
  ],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss',
})
export class MaincontentComponent {}
