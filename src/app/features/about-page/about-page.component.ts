import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template:
  `
    <section id="about">
      <div class="container my-4">
        <div class="row gy-4 gy-md-0 align-items-center">
          <div class="col-12 col-md-6">
            <p class="h1 fw-bold">I'm Bruno Picolo a Software Engineer</p>
            <p class="h2 fw-light">Nice to meet you!</p>
            <button [routerLink]="['/skills']" type="button" class="btn btn-primary bg-gradient mt-4">My skills</button>
          </div>
          <div class="col-12 col-md-6">
            <img class="w-100 rounded-3"
                 src="assets/profile-photo.jfif"
                 alt="My profile picture">
          </div>
        </div>
      </div>
    </section>
  `

})
export class AboutPageComponent {
// SRP: Show general information about the author
}
