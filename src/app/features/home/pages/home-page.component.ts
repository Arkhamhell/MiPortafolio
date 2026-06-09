import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../ui/hero/hero.component';
import { AboutComponent } from '../ui/about/about.component';
import { SkillsComponent } from '../ui/skills/skills.component';
import { ContactSectionComponent } from '../ui/contact-section/contact-section.component';
import { ProjectsPreviewComponent } from '../ui/projects-preview/projects-preview.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroComponent, AboutComponent, SkillsComponent, ContactSectionComponent, ProjectsPreviewComponent],
  template: `
    <app-hero />

    @defer (on idle) {
      <app-about />
      <app-skills />
      <app-projects-preview />
      <app-contact-section />
    }
  `
})
export class HomePageComponent {}
