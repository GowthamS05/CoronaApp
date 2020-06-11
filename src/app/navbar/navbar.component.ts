import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activeThem = 'lightThemeProps';
  constructor(private themService: ThemeService) {
  }

  ngOnInit() {
  }
  toggleThem() {
    // refactor this ugly code :) for demo only
    if (this.activeThem !== 'lightThemeProps') {
      this.themService.setActiveThem('lightThemeProps');
      this.activeThem = 'lightThemeProps';
    } else {
      this.themService.setActiveThem('darkThemeProps');
      this.activeThem = 'darkThemeProps';
    }
  }

}
