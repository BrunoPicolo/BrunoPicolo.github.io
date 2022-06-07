import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { SkillsListComponent } from './skills-page/skills-list/skills-list.component';
import { SkillsItemComponent } from './skills-page/skills-item/skills-item.component';
import { SharedModule } from '../shared/shared.module'
import { AppRoutingModule } from '../app-routing.module'



@NgModule({
  declarations: [
    AboutPageComponent,
    SkillsPageComponent,
    SkillsListComponent,
    SkillsItemComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ]
})
export class FeaturesModule { }
