import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.scss']
})
export class SkillsItemComponent {
  @Input() name: string = ''
  @Input() icon: string = ''
  @Input() experience: number = 0

  constructor() { }

}
