import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  @Input() counter!: number;
  @Input() stock!: number;
  @Output() newCounterValue = new EventEmitter<number>();

  removeQuantity(): void {
    this.counter > 0 ? (this.counter -= 1) : (this.counter = 0);
    this.emitCounter();
  }

  addQuantity(): void {
    this.counter < this.stock ? (this.counter += 1) : this.counter;
    this.emitCounter();
  }

  emitCounter(): void {
    this.newCounterValue.emit(this.counter);
  }
}
