import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbModule, NgbProgressbar } from "@ng-bootstrap/ng-bootstrap";
import { BootstrapIconsModule } from "ng-bootstrap-icons";
import { Facebook, Github, Linkedin } from "ng-bootstrap-icons/icons";
import {
  Css,
  Angular,
  Java,
  Html,
  Bootstrap5,
  Javascript,
  Kotlin,
  Spring,
  Mysql,
  Docker,
  Openshift,
  Jenkins
} from './icons';
import { TruncatePipe } from './pipes/truncate.pipe'

const icons = {
  Linkedin,
  Github,
  Facebook,
  Bootstrap5,
  Angular,
  Java,
  Css,
  Html,
  Javascript,
  Kotlin,
  Spring,
  Mysql,
  Docker,
  Openshift,
  Jenkins
}

@NgModule({
  declarations: [
    TruncatePipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    NgbProgressbar,
    BootstrapIconsModule,
    TruncatePipe
  ]
})
export class SharedModule {
  /* Responsibility: Contains the declarations/imports/export of cross-module objects */
}
