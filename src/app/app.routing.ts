import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AdvantageComponent} from './advantage/advantage.component';
import {FormAdvantageComponent} from './advantage/form-advantage/form-advantage.component';
import {DeleteAdvantageComponent} from './advantage/delete-advantage/delete-advantage.component';
import {SkillComponent} from './skill/skill.component';
import {FormSkillComponent} from './skill/form-skill/form-skill.component';
import {DeleteSkillComponent} from './skill/delete-skill/delete-skill.component';
import {FormCharacterComponent} from './character/form-character/form-character.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'advantages', component: AdvantageComponent},
  {path: 'advantages/new', component: FormAdvantageComponent},
  {path: 'advantages/:id/edit', component: FormAdvantageComponent},
  {path: 'advantages/:id/delete', component: DeleteAdvantageComponent},
  {path: 'skills', component: SkillComponent},
  {path: 'skills/new', component: FormSkillComponent},
  {path: 'skills/:id/edit', component: FormSkillComponent},
  {path: 'skills/:id/delete', component: DeleteSkillComponent},
  {path: 'character/new', component: FormCharacterComponent},
  {path: 'character/:id/edit', component: FormCharacterComponent}
];

export const appRoutingProviders: any[] = [];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
