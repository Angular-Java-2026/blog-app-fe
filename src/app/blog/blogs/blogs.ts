import { Component, inject, OnInit, signal } from '@angular/core';
import { BlogInfo } from '../../model/blog-info';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  standalone: false,
  styleUrl: './blogs.css',
  templateUrl: './blogs.html',
})
export class Blogs implements OnInit {
  blogs = signal<BlogInfo[] | null>(null);
  blogService = inject(BlogService);

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.blogService.getAllBlogs().subscribe((blogInfos: BlogInfo[]) => this.blogs.set(blogInfos));
  }
}
