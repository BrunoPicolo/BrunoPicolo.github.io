import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbProgressbar } from "@ng-bootstrap/ng-bootstrap";
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
} from './icons'

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
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    NgbProgressbar,
    BootstrapIconsModule
  ]
})
export class SharedModule { }
