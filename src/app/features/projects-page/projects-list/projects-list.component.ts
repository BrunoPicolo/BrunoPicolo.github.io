import { Component } from '@angular/core';
import { Project } from '../models/Project'
import { ProjectService } from '../services/project.service'

@Component({
  selector: 'app-projects-list',
  template:
  `
    <div class="row gy-4 mt-4">
      <div
        *ngFor="let project of projects"
        class="col-12 col-sm-6 col-md-4 col-lg-3">
        <app-project-card [project]="project"></app-project-card>
      </div>
    </div>
  `
})
export class ProjectsListComponent {
// SRP: Renders a project cards

  projects: Project[] = this.projectService.getAll()

  constructor(private projectService: ProjectService) { }
}
