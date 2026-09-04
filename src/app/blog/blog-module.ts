import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from './blog/blog';
import { Blogs } from './blogs/blogs';

@NgModule({
  declarations: [Blog, Blogs],
  exports: [Blogs],
  imports: [CommonModule],
})
export class BlogModule {}
