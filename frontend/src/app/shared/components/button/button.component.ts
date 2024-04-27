import { Component, Input } from '@angular/core';
import { ButtonDTO } from '../../models/buttton';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() dataButton: ButtonDTO = {
    name: 'Enviar',
    type: 'button-outliner',
    size: 'button-s',
  };
}
