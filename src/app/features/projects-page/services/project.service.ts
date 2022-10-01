import { Injectable } from '@angular/core';
import { Project } from '../models/Project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
// SRP: manages project data

  private projects: Project[] = [
    {
      name: 'This website :)',
      company: 'Personal Project',
      image: 'https://intelloz.com/wp-content/uploads/2021/05/Website.jpg',
      description: `
        I joined myself to build this website with angular and bootstrap to show you a little bit about me and what I do.
      `,
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'Git'
      ]
    },
    {
      name: 'AVIATAR',
      company: 'Edataconsulting',
      image: 'https://www.aviatar.com/documents/5526646/6394475/Bild+Homepage+neu/61c7e83d-2a8c-4702-ac30-a4a966fbaa98?t=1587042775491',
      description: `
        Integrated the AVIATAR team for the development of new features and maintenance for their aircraft management tooling.
        `,
      technologies: [
        'Angular',
        'TypeScript',
        'Jest',
        'Kotlin',
        'Openshift',
        'Docker',
        'MySQL',
        'Spring',
        'Git',
        'Maven',
        'Jenkins',
        'Jira/Confluence'
      ]
    },
    {
      name: 'SiteCP',
      company: 'Capgemini',
      image: 'https://imgs.search.brave.com/m8pUzAxzDFhRVf_ShyreCOPR1dZKT2fUeHUaPySMVgM/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly9zMTcw/MjYucGNkbi5jby93/cC1jb250ZW50L3Vw/bG9hZHMvc2l0ZXMv/MTMvMjAyMC8wNC9B/ZG9iZVN0b2NrXzMx/NDI3NzAzNy1zY2Fs/ZWQtZTE1ODcxMDU3/NzQ3MjQuanBlZw',
      description: `
        DevOps ecosystem and environment\'s maintenance for a web application from one of the largest electricity suppliers in France.
      `,
      technologies: [
        'Adobe Experience Manager',
        'Apache Server',
        'Jboss',
        'GoDC',
        'Git',
        'Linux',
        'Angular',
        'Java',
        'Jenkins',
        'Jira/Confluence',
        'Docker Compose',
        'Docker',
        'Bash',
        'Groovy'
      ]
    },
    {
      name: 'Operational Display System',
      company: 'Capgemini',
      image: 'https://elperuano.pe/fotografia/thumbnail/2021/08/16/000127418M.jpg',
      description: `
        SVC migration for the air traffic information visualization system for French air traffic controllers, within the ATM cluster, in Toulouse
      `,
      technologies: [
        'Git',
        'Bash',
        'Awk',
        'C++',
        'ClearCase',
        'Linux'
      ]
    },
    {
      name: 'Elaastic Questions',
      company: 'IRIT',
      image: 'https://itechify.com/wp-content/uploads/2016/07/Best-android-apps-student-college-school.jpg',
      description: `
        I integrated a scrum team during my Master degree to develop new functionalities for the Elaastic web application.
      `,
      technologies: [
        'Kotlin',
        'Gradle',
        'SemandicUI',
        'Spring',
        'Github Actions',
        'Docker',
        'Git'
      ]
    },
    {
      name: 'IRIT',
      company: 'IRIT',
      image: 'https://www.aprendiendoarduino.com/wordpress/wp-content/uploads/2021/03/AD21-cover-youtube.png',
      description: `
        Development of a new system to remotely update Arduino devices. A new technique to modify Arduino\'s memory while execution without having to flash all the memory.
      `,
      technologies: [
        'Bash',
        'Linux',
        'Arduino',
        'Make',
        'C',
        'Git',
        'Awk'
      ]
    }
  ]

  getAll = (): Project[] => this.projects
}
