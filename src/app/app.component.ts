import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'greater-than-equal-to';
    modeSelected = false
    mode = ''

    modeClick(id: string) {
		this.mode = id
		this.modeSelected = true
    }
}
