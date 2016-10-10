import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { FormSkillComponent } from './skill/form-skill/form-skill.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'skills', component: SkillComponent },
  { path: 'skills/new', component: FormSkillComponent },
  { path: 'skills/:id/edit', component: FormSkillComponent },
];

export const appRoutingProviders: any[] = [
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
