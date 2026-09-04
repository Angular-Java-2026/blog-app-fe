import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogInfo } from '../model/blog-info';

@Service()
export class BlogService {
  getAllBlogs(): Observable<BlogInfo[]> {
    return of([
      {
        blogId: '3d094556-2170-49f6-a56e-901ddd6ebb8c',
        title: 'Smallville',
        subUrl: 'smallville',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis quam maximus, luctus ipsum at, sollicitudin urna. Nullam volutpat est vel odio commodo, id posuere massa luctus. Praesent nec aliquet turpis. Integer eget consectetur velit, id posuere ipsum. Vivamus volutpat, massa sit amet posuere scelerisque, sem ante cursus turpis, ac commodo ipsum orci suscipit lorem. Sed placerat sem hendrerit nulla malesuada egestas. Cras hendrerit mauris a odio pellentesque consectetur. Etiam eu interdum nisl. Curabitur congue diam quis ante suscipit pharetra. Quisque accumsan sapien arcu, sit amet accumsan nisl fringilla a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vehicula tincidunt tellus in elementum. In fermentum tortor est, id efficitur massa commodo eget.',
        createdAt: '2026-09-04T19:18:13.627237',
        updatedAt: '2026-09-04T19:18:13.627237',
      },
    ]);
  }
}
