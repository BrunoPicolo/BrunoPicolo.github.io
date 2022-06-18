import { Component } from '@angular/core';
import { Project } from '../models/Project'
import { ProjectService } from '../services/project.service'

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent {
  /* Responsibility: Manages a project list */

  projects: Project[] = this.projectService.getAll()

  constructor(private projectService: ProjectService) { }

}
