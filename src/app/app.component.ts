import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule,HeaderComponent,MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lopdim';
}
