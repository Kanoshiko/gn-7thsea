import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { SkillComponent } from './skill/skill.component';
import { SkillService } from './skill/skill.service';
import { HomeComponent } from './home/home.component';

import { routing, appRoutingProviders } from './app.routing';
import { FormSkillComponent } from './skill/form-skill/form-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SkillComponent,
    HomeComponent,
    FormSkillComponent
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
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
