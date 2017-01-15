import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing, appRoutingProviders } from './app.routing';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { AdvantageComponent } from './advantage/advantage.component';
import { FormAdvantageComponent } from './advantage/form-advantage/form-advantage.component';
import { SkillComponent } from './skill/skill.component';
import { FormSkillComponent } from './skill/form-skill/form-skill.component';
import { CharacterComponent } from './character/character.component';
import { FormCharacterComponent } from './character/form-character/form-character.component';

import { AdvantageService } from './shared/service/advantage.service';
import { SkillService } from './shared/service/skill.service';
import { CharacterService } from './shared/service/character.service';
import { NationalityService } from './shared/service/nationality.service';
import { DeleteAdvantageComponent } from './advantage/delete-advantage/delete-advantage.component';
import { DeleteSkillComponent } from './skill/delete-skill/delete-skill.component';
import { PopupSkillComponent } from './character/form-character/popup-skill/popup-skill.component';

import { MarkdownPipe } from './shared/pipes/markdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdvantageComponent,
    SkillComponent,
    HomeComponent,
    FormAdvantageComponent,
    FormSkillComponent,
    CharacterComponent,
    FormCharacterComponent,
    DeleteAdvantageComponent,
    DeleteSkillComponent,
    PopupSkillComponent,
    MarkdownPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    routing
  ],
  providers: [
    AdvantageService,
    SkillService,
    CharacterService,
    NationalityService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
