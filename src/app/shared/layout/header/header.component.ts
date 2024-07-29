import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  displaySidebar: boolean = false;
  items: MenuItem[];

  constructor() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
      { label: 'Acerca de', icon: 'pi pi-fw pi-info-circle', routerLink: ['/about'] },
      { label: 'Contacto', icon: 'pi pi-fw pi-envelope', routerLink: ['/contact'] }
    ];
  }
}
