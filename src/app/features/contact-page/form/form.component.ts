import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template:
  `
    <form action="" class="row gy-4">
      <div class="col-6">
        <label for="firstNameFormControlInput" class="form-label fw-bold">First name</label>
        <input type="text" id="firstNameFormControlInput" class="form-control">
      </div>
      <div class="col-6">
        <label for="secondNameFormControlInput" class="form-label fw-bold">Last name</label>
        <input type="text" id="secondNameFormControlInput" class="form-control">
      </div>
      <div class="col-12">
        <label for="emailFormControlInput" class="form-label fw-bold">Email</label>
        <input type="email" id="emailFormControlInput" class="form-control">
      </div>
      <div class="col-12">
        <label for="messageFormControlInput" class="form-label fw-bold">Suggestion</label>
        <textarea type="email" id="messageFormControlInput" class="form-control" rows="3"></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </div>
    </form>
  `
})
export class FormComponent {
// SRP: Gather contact information

  // TODO: Not finished
}
