import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  displaySidebar: boolean = false;

}
