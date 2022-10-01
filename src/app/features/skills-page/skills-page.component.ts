import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html'
})
export class SkillsPageComponent {
// SRP: Shows the author skills

  frontendSkills = [
    { name: 'HTML', experience: 90, icon: 'html' },
    { name: 'CSS', experience: 70, icon: 'css' },
    { name: 'JavaScript', experience: 90, icon: 'javascript' },
    { name: 'Bootstrap', experience: 80, icon: 'bootstrap5' },
    { name: 'Angular', experience: 85, icon: 'angular' }
  ]

  backendSkills = [
    { name: 'Java', experience: 80, icon: 'java' },
    { name: 'Kotlin', experience: 75, icon: 'kotlin' },
    { name: 'Spring', experience: 80, icon: 'spring' },
    { name: 'SQL', experience: 70, icon: 'mysql' }
  ]

  ciCdSkills = [
    { name: 'Docker', experience: 90, icon: 'docker' },
    { name: 'DockerCompose', experience: 90, icon: 'docker' },
    { name: 'Jenkins', experience: 80, icon: 'jenkins' },
    { name: 'Openshift', experience: 80, icon: 'openshift' }
  ]
}
