import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../ui/hero/hero.component';
import { AiFocusComponent } from '../ui/ai-focus/ai-focus.component';
import { AboutComponent } from '../ui/about/about.component';
import { SkillsComponent } from '../ui/skills/skills.component';
import { ProjectsPreviewComponent } from '../ui/projects-preview/projects-preview.component';
import { ExperienceComponent } from '../ui/experience/experience.component';
import { ContactSectionComponent } from '../ui/contact-section/contact-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    AiFocusComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsPreviewComponent,
    ExperienceComponent,
    ContactSectionComponent,
  ],
  template: `
    <app-hero />
    <app-ai-focus />

    @defer (on idle) {
      <app-about />
      <app-stack />
      <app-projects-preview />
      <app-experience />
      <app-contact-section />
    }
  `,
})
export class HomePageComponent {}
