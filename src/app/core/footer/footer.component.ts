import { Component } from '@angular/core'

const REDIRECTIONS = new Map([
  ['linkedin', 'https://www.linkedin.com/in/bruno-picolo-ortiz'],
  ['github', 'https://github.com/BrunoPicolo'],
  ['facebook','https://www.facebook.com/bruno.picolo.7']
])

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    bi:hover {
      cursor: pointer;
    }
  `]
})
export class FooterComponent {

  constructor() { }

  redirectTo(url: string) {
    window.location.href = REDIRECTIONS.get(url) as string
  }
}
