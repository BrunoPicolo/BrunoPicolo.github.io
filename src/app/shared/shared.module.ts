import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BootstrapIconsModule } from "ng-bootstrap-icons";
import { Facebook, Github, Linkedin } from "ng-bootstrap-icons/icons";

const icons = {
  Linkedin,
  Github,
  Facebook
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class SharedModule { }
