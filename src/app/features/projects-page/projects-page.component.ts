import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  template:
  `
    <section id="projects">
      <div class="container py-5">
        <p class="h2 fw-bold">My portfolio</p>
        <p class="h4 fw-light">Personal and professional projects</p>
        <app-projects-list></app-projects-list>
      </div>
    </section>
  `
})
export class ProjectsPageComponent {
// SRP: Shows the author's worked projects

  /**
   * TODO:
   * - Use the project service here and pass it to the child components via Imports
   * - Use routes?
   * - Decouple the project-detail from the project card off canvas
   */
}
