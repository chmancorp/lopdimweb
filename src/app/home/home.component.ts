import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  banners: any[];

  constructor() {
    this.banners = [
      { title: 'Banner 1', image: 'assets/images/banner1.png', description: 'Descripción 1' },
      { title: 'Banner 2', image: 'assets/images/banner2.png', description: 'Descripción 2' },
      { title: 'Banner 3', image: 'assets/images/banner3.jpg', description: 'Descripción 3' },
    ];
  }
}
