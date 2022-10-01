import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-skills-list',
  template:
  `
    <app-skills-item
      *ngFor="let skill of skills"
      [name]="skill.name"
      [icon]="skill.icon"
      [experience]="skill.experience">
    </app-skills-item>
  `
})
export class SkillsListComponent {
// SRP: Renders skills
  @Input() skills: any[] = []

  constructor() { }

}
