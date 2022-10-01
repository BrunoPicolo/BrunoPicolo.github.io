import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
    <header>
      <app-nav-bar></app-nav-bar>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  `
})
export class AppComponent { }
