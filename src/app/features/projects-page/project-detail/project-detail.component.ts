import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Project } from '../models/Project'

@Component({
  selector: 'app-project-detail',
  template:
  `
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">{{ project?.name }} - {{ project?.company }}</h5>
      <button
        type="button"
        class="btn-close text-reset"
        (click)="offCanvasClose()"
        aria-label="Close">
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="row vh-100 align-items-md-center">
        <div class="col-12 col-md-6">
          <img class="w-100 rounded-3" [src]="project?.image" alt="">
        </div>
        <div class="col-12 col-md-6">
          <p>{{ project?.description }}</p>
          <br>
          <span
            class="fw-light"
            *ngFor="let tech of project?.technologies">
        [{{ tech }}]
      </span>
        </div>
      </div>
    </div>
  `
})
export class ProjectDetailComponent {
// SRP: Displays a project information

  @Input() project: Project | undefined
  @Output() closeOffCanvasEvent = new EventEmitter<void>()

  constructor() { }

  offCanvasClose = () => this.closeOffCanvasEvent.emit()
}
