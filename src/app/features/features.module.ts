import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AboutPageComponent } from './about-page/about-page.component'
import { SkillsPageComponent } from './skills-page/skills-page.component'
import { SkillsListComponent } from './skills-page/skills-list/skills-list.component'
import { SkillsItemComponent } from './skills-page/skills-item/skills-item.component'
import { SharedModule } from '../shared/shared.module'
import { AppRoutingModule } from '../app-routing.module'
import { ProjectsPageComponent } from './projects-page/projects-page.component'
import { ProjectsListComponent } from './projects-page/projects-list/projects-list.component'
import { ProjectCardComponent } from './projects-page/project-card/project-card.component'
import { ProjectDetailComponent } from './projects-page/project-detail/project-detail.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FormComponent } from './contact-page/form/form.component'


@NgModule({
  declarations: [
    AboutPageComponent,
    SkillsPageComponent,
    SkillsListComponent,
    SkillsItemComponent,
    ProjectsPageComponent,
    ProjectsListComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
    ContactPageComponent,
    FormComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ]
})
export class FeaturesModule {
// SRP: Loads feature's dependencies an declare theirs components
}
