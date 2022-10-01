import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-skills-item',
  template:
  `
    <div class="bg-white p-3">
      <div class="row align-items-center">
        <bi class="col-2 col-sm-1" name="{{ icon }}"></bi>
        <p class="col-3 col-sm-2 fw-bold m-0 align-self-center">{{ name }}</p>
        <div class="col-7 col-sm-9">
          <ngb-progressbar
            type="primary"
            [value]="experience"
            [showValue]="true"
            [max]="100">
          </ngb-progressbar>
        </div>
      </div>
    </div>
  `
})
export class SkillsItemComponent {
// SRP: Shows skill information
  @Input() name: string = ''
  @Input() icon: string = ''
  @Input() experience: number = 0
}
