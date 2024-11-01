import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  username: string | null = '';
  avatar: string | null = '';  // Variable para almacenar la URL del avatar

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$().subscribe(status => this.isLoggedIn = status);
    this.authService.getUsername$().subscribe((name: string | null) => this.username = name);
    this.authService.getAvatar$().subscribe((avatarUrl: string | null) => this.avatar = avatarUrl);
  }

  logout() {
    this.authService.logout();
  }
}
