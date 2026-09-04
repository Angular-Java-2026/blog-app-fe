import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { environment } from '../environment/environment';

export interface AuthRequest {
  username?: string;
  password?: string;
}

export interface JwtPayload {
  exp?: number;
  iat?: number;
  sub?: string;
  [key: string]: any;
}

@Service()
export class JwtService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/auth';
  private readonly tokenKey = 'token';

  getValidToken(): Observable<string> {
    const token = this.getToken();
    if (token && !this.isTokenExpired(token)) {
      return of(token);
    }
    return this.generateToken();
  }

  private generateToken(
    username: string = environment.username,
    password: string = environment.password,
  ): Observable<string> {
    const payload: AuthRequest = { username, password };

    return this.http.post(`${this.baseUrl}/generateToken`, payload, { responseType: 'text' }).pipe(
      tap((response: string) => {
        let token = response;
        try {
          const parsed = JSON.parse(response);
          token = parsed.token || parsed.accessToken || parsed.jwt || response;
        } catch {
          token = response;
        }

        if (token) {
          this.setToken(token);
        }
      }),
    );
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  private decodeToken(token?: string | null): JwtPayload | null {
    const tokenToDecode = token ?? this.getToken();
    if (!tokenToDecode) {
      return null;
    }

    try {
      const parts = tokenToDecode.split('.');
      if (parts.length !== 3) {
        return null;
      }

      const base64Url = parts[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join(''),
      );

      return JSON.parse(jsonPayload) as JwtPayload;
    } catch {
      return null;
    }
  }

  private getTokenExpirationDate(token?: string | null): Date | null {
    const payload = this.decodeToken(token);
    if (!payload || !payload.exp) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(payload.exp);
    return date;
  }

  private isTokenExpired(token?: string | null): boolean {
    const expirationDate = this.getTokenExpirationDate(token);
    if (!expirationDate) {
      return true;
    }

    return !(expirationDate.valueOf() > new Date().valueOf());
  }

  private isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
}
