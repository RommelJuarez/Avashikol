import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sidebarOpen = false;
  sidebar2Open = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleSidebar2() {
    this.sidebar2Open = !this.sidebar2Open;
  }
  loginWithGithub() {
    window.location.href = 'http://localhost:8080/login/github';
  }

  loginWithGoogle() {
    window.location.href = 'http://localhost:8080/login/google';
  }
}
