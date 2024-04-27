import { Component, Input } from '@angular/core';
import { ButtonDTO } from '../../models/buttton.dto';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() dataButton!: ButtonDTO;
  @Input() stock!: number;
}
