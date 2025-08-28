import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly PROFILE_KEY = 'user_profile';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Simulação de login (substitua por chamada à API)
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token');
      localStorage.setItem(this.PROFILE_KEY, 'admin');
      return true;
    } else if (username === 'user' && password === 'user') {
      localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token');
      localStorage.setItem(this.PROFILE_KEY, 'comum');
      return true;
    }
    return false;
  }

  register(username: string, password: string): boolean {
    // Simulação de registro (substitua por chamada à API)
    // Sempre registra como "comum"
    localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token');
    localStorage.setItem(this.PROFILE_KEY, 'comum');
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.PROFILE_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getProfile(): string | null {
    return localStorage.getItem(this.PROFILE_KEY);
  }
}
