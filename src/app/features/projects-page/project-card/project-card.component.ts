import { Component, Input, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { Project } from '../models/Project'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  /* Responsibility: Manages a card with a project information */

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
