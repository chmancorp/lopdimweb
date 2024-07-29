import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true, 
  imports: [SidebarModule,MenubarModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  visible: boolean = true;
  items: MenuItem[];

  constructor() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'Acerca de', icon: 'pi pi-fw pi-info-circle', routerLink: '/about' },
      { label: 'Contacto', icon: 'pi pi-fw pi-envelope', routerLink: '/contact' }
    ];
  }
}
