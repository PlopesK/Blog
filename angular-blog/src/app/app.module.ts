import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { SmallCardComponent } from './components/cards/small-card/small-card.component';
import { BigCardComponent } from './components/cards/big-card/big-card.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
    BigCardComponent,
    HomeComponent,
    CardsComponent,
    ContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
