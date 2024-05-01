import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { InputDTO, OptionDTO } from '../../models/input.dto';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class InputComponent {
  @Input() dataInput: InputDTO = {
    label: 'Title',
    placeholder: 'placeholder',
    type: 'select',
    formControl: 'this.title',
    required: true,
    //iconLeft: 'phone',
    //iconRight: 'password',
    options: [
      {
        id: '1',
        name: 'Masajes',
      },
      {
        id: '2',
        name: 'Mesoterapia',
      },
      {
        id: '3',
        name: 'Presoterapia',
      },
    ],
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

  hidePassword: boolean = true;
  expandSelect: boolean = false;
  optionSelected!: OptionDTO;
  iconEmail = faEnvelope;
  iconPhone = faPhone;
  iconCalendar = faCalendar;
  iconEye = faEye;
  iconEyeSlash = faEyeSlash;
  iconArrowUp = faChevronUp;
  iconArrowDown = faChevronDown;

  toogleIconPassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  toogleSelect(): void {
    this.expandSelect = !this.expandSelect;
  }

  optionMenu(value: string): void {
    if (this.dataInput.options !== undefined) {
      this.optionSelected = this.dataInput.options.filter(
        ({ id }) => id === value
      )[0];
    }

    this.toogleSelect();
  }
}
