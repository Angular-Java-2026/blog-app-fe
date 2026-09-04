import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blogs } from './blogs/blogs';

@NgModule({
  declarations: [Blogs],
  exports: [Blogs],
  imports: [CommonModule],
})
export class BlogModule {}
