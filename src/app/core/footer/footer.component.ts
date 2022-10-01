import { Component } from '@angular/core'

const REDIRECTIONS = new Map([
  ['linkedin', 'https://www.linkedin.com/in/bruno-picolo-ortiz'],
  ['github', 'https://github.com/BrunoPicolo'],
  ['facebook','https://www.facebook.com/bruno.picolo.7']
])

@Component({
  selector: 'app-footer',
  template:
  `
    <div class="fixed-bottom border-top bg-light">
      <div class="container py-2 py-md-4">
        <div class="row gy-4 text-center align-items-center">
          <div class="col-6">
            <span class="bg-primary bg-gradient p-1 rounded-3 text-light">Bruno</span>
            Picolo
          </div>
          <div class="col-6">
            <ul class="list-inline m-0">
              <li class="list-inline-item">
                <bi name="linkedin" (click)="redirectTo('linkedin')"></bi>
              </li>
              <li class="list-inline-item">
                <bi name="github" (click)="redirectTo('github')"></bi>
              </li>
              <li class="list-inline-item">
                <bi name="facebook" (click)="redirectTo('facebook')"></bi>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    bi:hover {
      cursor: pointer;
    }
  `]
})
export class FooterComponent {
// SRP: shows website information and redirections

  redirectTo(url: string) {
    window.location.href = REDIRECTIONS.get(url) as string
  }
}
