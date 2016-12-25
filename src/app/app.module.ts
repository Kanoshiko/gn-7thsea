import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing, appRoutingProviders } from './app.routing';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { SkillComponent } from './skill/skill.component';
import { FormSkillComponent } from './skill/form-skill/form-skill.component';
import { CharacterComponent } from './character/character.component';
import { FormCharacterComponent } from './character/form-character/form-character.component';

import { SkillService } from './shared/service/skill.service';
import { CharacterService } from './shared/service/character.service';
import { NationalityService } from './shared/service/nationality.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SkillComponent,
    HomeComponent,
    FormSkillComponent,
    CharacterComponent,
    FormCharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    routing
  ],
  providers: [
    SkillService,
    CharacterService,
    NationalityService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
