import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  template:
  `
    <section id="contact" class="py-5">
      <div class="container py-5 bg-light">
        <div class="row">
          <div class="col-12">
            <p class="h2 fw-bold">Have something in mind?</p>
            <p class="h4 fw-light">Let's discuss it over a coffee!</p>
          </div>
        </div>
        <div class="row gy-4 align-items-center">
          <div class="col-12 col-md-6 pe-4">
            <img class="w-100 rounded-3" src="https://picsum.photos/1920/1080?random=1" alt="">
          </div>
          <div class="col-12 col-md-6">
            <app-form></app-form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactPageComponent {
// SRP: Allows the user to send a message
}
