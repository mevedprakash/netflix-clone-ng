import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOGO_URL } from '../../constants/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoUrl = LOGO_URL;
}
