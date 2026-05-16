import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/home']);
    }
  }

  login(): void {
    if (this.isLoading) return;

    this.isLoading = true;

    setTimeout(() => {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.isLoading = false;
      this.router.navigate(['/home']);
    }, 2000);
  }
}
