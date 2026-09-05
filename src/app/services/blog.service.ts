import { inject, Service } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { BlogInfo } from '../model/blog-info';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';
import { environment } from '../environment/environment';

@Service()
export class BlogService {
  private readonly http = inject(HttpClient);
  private readonly jwtService = inject(JwtService);

  getAllBlogs(): Observable<BlogInfo[]> {
    return this.jwtService.getValidToken().pipe(
      switchMap((token: string) =>
        this.http.get<BlogInfo[]>(`${environment.blogApiUrl}/api/blogs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ),
    );
  }
}
