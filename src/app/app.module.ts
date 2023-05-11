import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModeSelectionComponent } from './mode-selection/mode-selection.component';
import { InfiniteModeComponent } from './infinite-mode/infinite-mode.component';
import { LifeRemainingComponent } from './lives/life-remaining/life-remaining.component';
import { LifeLostComponent } from './lives/life-lost/life-lost.component';
import { GenerateNumbersComponent } from './generate-numbers/generate-numbers.component';

@NgModule({
  	declarations: [
		AppComponent,
		ModeSelectionComponent,
		InfiniteModeComponent,
		LifeRemainingComponent,
		LifeLostComponent,
  GenerateNumbersComponent
  	],
  	imports: [
  	  	BrowserModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
