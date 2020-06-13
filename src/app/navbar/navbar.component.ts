import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  darkBorder = 'darkBorder';
  lightBorder = '';
  activeThem = 'darkThemeProps';
  constructor(private themService: ThemeService) {
  }

  ngOnInit() {
  }
  toggleThem(val) {
    this.darkBorder = '';
    this.lightBorder = '';
    // refactor this ugly code :) for demo only
    if (val == 'lightThemeProps') {
      this.themService.setActiveThem('lightThemeProps');
      this.activeThem = 'lightThemeProps';
      this.lightBorder = 'lightBorder';
    } else if (val === 'darkThemeProps') {
      this.darkBorder = 'darkBorder';
      this.themService.setActiveThem('darkThemeProps');
      this.activeThem = 'darkThemeProps';
    }
  }

}
