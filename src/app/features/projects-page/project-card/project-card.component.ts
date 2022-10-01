import { Component, Input, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { Project } from '../models/Project'

@Component({
  selector: 'app-project-card',
  template:
  `
    <div class="card">
      <img [src]="project?.image" class="card-img-top img-fluid" style="max-height: 300px; min-height: 200px">
      <div class="card-body">
        <h5 class="card-title">{{ project?.name }}</h5>
        <p class="card-text">{{ project?.description | Truncate : 100 : true : '...' }}</p>
        <button
          class="btn btn-primary"
          (click)="toggleCardDetailsOffCanvas(cardDetailContent)">
          More info
        </button>

        <ng-template #cardDetailContent>
          <app-project-detail
            (closeOffCanvasEvent)="toggleOffCardDetailsOffCanvas()"
            [project]="project">
          </app-project-detail>
        </ng-template>
      </div>
    </div>
  `
})
export class ProjectCardComponent {
// SRP: Card component containing project information

  @Input() project: Project | undefined

  constructor(private offCanvasService: NgbOffcanvas) { }

  toggleCardDetailsOffCanvas = (content: TemplateRef<any>) =>
    this.offCanvasService.open(
      content,
      {
        position: 'bottom',
        keyboard: true,
        panelClass: 'h-100',
        scroll: true
      }
    )

  toggleOffCardDetailsOffCanvas() {
    this.offCanvasService.dismiss()
  }
}
