import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'generate-numbers',
  	templateUrl: './generate-numbers.component.html',
  	styleUrls: ['./generate-numbers.component.css']
})
export class GenerateNumbersComponent implements OnInit {
	max = 99
	numberOne!: number
	numberTwo!: number

	ngOnInit(): void {
		this.generateNumbers()
	}


	generateNumbers() {
		this.numberOne = Math.floor(Math.random() * this.max)
		this.numberTwo = Math.floor(Math.random() * this.max)
	}
}
