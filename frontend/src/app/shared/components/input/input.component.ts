import { Component, Input } from '@angular/core';
import { InputDTO } from '../../models/input.dto';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() dataInput: InputDTO = {
    field: 'input',
    label: 'Title',
    placeholder: 'placeholder',
    type: 'text',
    formControl: 'this.title',
    required: true,
    icon: '',
    errors: [
      {
        type: 'required',
        message: 'Title is required.',
      },
      {
        type: 'maxlength',
        message: 'Title can be max 55 characters long.',
      },
    ],
  };

  hide: boolean = true;
}
