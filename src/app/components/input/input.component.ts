import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  txt: string = ''
  @Output() txtOutput : EventEmitter<string> = new EventEmitter<string>()

  onChange() {
    this.txtOutput.emit(this.txt)
    console.log(this.txt)
  }
}
