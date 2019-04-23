import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SatisfactionComponent } from './components/satisfaction/satisfaction.component';
import { MoneyComponent } from './components/money/money.component';
import { ClockComponent } from './components/clock/clock.component';
import { LvlComponent } from './components/lvl/lvl.component';
import { TabsComponent} from './components/tabs/tabs.component';
import { TabComponent} from './components/tab/tab.component';
import { DidacticsComponent } from './components/didactics/didactics.component';
import { TeachingComponent } from './components/teaching/teaching.component';
import { GameComponent } from './components/game/game.component';
import { OptionBarComponent } from './components/option-bar/option-bar.component';
import { GradeBarComponent } from './components/grade-bar/grade-bar.component';

const appRoutes: Routes = [];

import { CookieService } from './services/cookie.service';
import { EventComponent } from "./components/satisfaction/event.component";
import { SesjaComponent } from './components/sesja/sesja.component';

@NgModule({
  declarations: [
    AppComponent,
    SatisfactionComponent,
    MoneyComponent,
    ClockComponent,
    LvlComponent,
    TabsComponent,
    TabComponent,
    DidacticsComponent,
    TeachingComponent,
    GameComponent,
    OptionBarComponent,
    GradeBarComponent,
    EventComponent,
    SesjaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapModalModule,
    RouterModule.forRoot(appRoutes),
	BrowserAnimationsModule
  ],
  providers: [
    CookieService
  ],
  entryComponents: [
    EventComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
