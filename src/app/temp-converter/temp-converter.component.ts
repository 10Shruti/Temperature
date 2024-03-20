import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-temp-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.css'
})
export class TempConverterComponent {
  celsiusValue:number=0;
  fahrenheitValue: number = 32;

  convert(unit: string) {
    if (unit === 'celsius') {
      this.fahrenheitValue = (this.celsiusValue * 9 / 5) + 32;
    } else {
      this.celsiusValue = (this.fahrenheitValue - 32) * 5 / 9;
    }
  }
}
