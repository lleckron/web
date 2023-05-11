import { Component } from '@angular/core'
import Mode from '../../models/mode';
import { Output, EventEmitter } from '@angular/core';

@Component({
  	selector: 'mode-selection',
  	templateUrl: './mode-selection.component.html',
  	styleUrls: ['./mode-selection.component.css']
})
export class ModeSelectionComponent {

    modes: Mode[] = [
      	{name: 'Infinite', id: 'infinite'},
      	{name: 'Nightmare', id: 'nightmare'}
    ]


    @Output() modeSelectEvent = new EventEmitter<string>()

    modeButtonClick(id: string) {
		this.modeSelectEvent.emit(id);
    }
}
