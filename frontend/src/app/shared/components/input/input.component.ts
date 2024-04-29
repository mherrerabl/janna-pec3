import { Component, Input } from '@angular/core';
import { InputDTO } from '../../models/input.dto';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() dataInput!: InputDTO; /*= {
    label: 'Title',
    placeholder: 'placeholder',
    type: 'textarea',
    formControl: 'this.title',
    required: true,
    iconLeft: 'email',
    iconRight: null,
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
  };*/

  hide: boolean = true;

  iconRight(): string | null {
    if (this.dataInput.iconRight === 'password') {
      if (this.hide) {
        return 'visibility_off';
      }

      return 'visibility';
    }

    return this.dataInput.iconRight;
  }

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
}
