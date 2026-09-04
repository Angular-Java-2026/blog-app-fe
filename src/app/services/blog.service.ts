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
        createdAt: '2026-09-02T19:18:13.627237',
        updatedAt: '2026-09-02T19:18:13.627237',
      },
      {
        blogId: '3d094556-2170-49f6-a56e-abc123',
        title: 'Supernatural',
        subUrl: 'supernatural',
        description: 'Nam efficitur molestie erat, ac congue libero. Aenean eget tempus elit.',
        content:
          'Nam efficitur molestie erat, ac congue libero. Aenean eget tempus elit. Cras luctus ante sed gravida egestas. Etiam sem est, rhoncus eget hendrerit et, fringilla in lacus. Donec aliquam purus sed purus viverra congue. Sed vel erat rutrum, ullamcorper odio rutrum, tempor libero. Mauris feugiat mauris vitae sem gravida, quis dictum diam lobortis. Duis diam nisl, dignissim ut sagittis ac, elementum non arcu. Ut est lacus, fermentum at tortor ut, sodales maximus odio',
        createdAt: '2026-09-03T19:18:13.627237',
        updatedAt: '2026-09-03T19:18:13.627237',
      },
      {
        blogId: '3d094556-2170-49f6-a56e-efg456',
        title: 'Heroes',
        subUrl: 'heroes',
        description: 'Curabitur suscipit consectetur risus, et rhoncus sapien congue nec.',
        content:
          'Curabitur suscipit consectetur risus, et rhoncus sapien congue nec. Curabitur nec consectetur odio, non ultrices nibh. Cras condimentum id metus non tempus. Nullam et euismod lacus. Mauris mattis neque sed odio suscipit tristique. Duis vel tortor aliquet massa iaculis facilisis vitae sed nisi. Quisque vestibulum dictum ipsum, at rhoncus arcu pellentesque sed. Nam id odio scelerisque, sodales magna quis, tempor turpis',
        createdAt: '2026-09-04T19:18:13.627237',
        updatedAt: '2026-09-04T19:18:13.627237',
      },
    ]);
  }
}
