import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Project } from '../models/Project'

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent {
  /* Responsibility: Displays a project information */

  @Input() project: Project | undefined
  @Output() closeOffCanvasEvent = new EventEmitter<void>()

  constructor() { }

  offCanvasClose = () => this.closeOffCanvasEvent.emit()
}
