import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './components/deck/deck.component';
import { ChangeValueDeckComponent } from './components/change-value-deck/change-value-deck.component';
import { ClassNipeValueDeckPipe } from './pipes/class-nipe-value-deck.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    ClassNipeValueDeckPipe,
    ChangeValueDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }