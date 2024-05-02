import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { InputDTO } from '../../../shared/models/input.dto';
import { isLoading } from '../../../spinner/actions/spinner.actions';
import * as MailActions from '../../actions';
import { MailDTO } from '../../models/mail.dto.ts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactMail: MailDTO;
  name: FormControl;
  surname: FormControl;
  email: FormControl;
  query: FormControl;

  contactForm: FormGroup;
  isValidForm: boolean | null;
  checkForm: boolean;

  inputsForm: InputDTO[];

  showFeedback: boolean;

  constructor(
    private formerBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.isValidForm = null;
    this.checkForm = false;
    this.showFeedback = false;

    this.contactMail = new MailDTO('', '', '', '');

    this.name = new FormControl(this.contactMail.name, [
      Validators.required,
      Validators.maxLength(55),
    ]);

    this.surname = new FormControl(this.contactMail.surname, [
      Validators.required,
      Validators.maxLength(55),
    ]);

    this.email = new FormControl(this.contactMail.email, [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);

    this.query = new FormControl(this.contactMail.query, [
      Validators.required,
      Validators.maxLength(255),
    ]);

    this.contactForm = this.formerBuilder.group({
      name: this.name,
      surname: this.surname,
      email: this.email,
      query: this.query,
    });

    this.inputsForm = this.getDataInputs();

    this.store.select('mail').subscribe((resp) => {
      if (resp.loaded) {
        this.contactForm.reset();
        this.showFeedback = true;
        this.checkForm = false;

        setTimeout(() => {
          this.showFeedback = false;
        }, 5000);
      }
    });
  }
  ngOnInit(): void {}

  sendForm(): void {
    this.checkForm = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.isValidForm = true;
    this.contactMail = this.contactForm.value;

    this.store.dispatch(isLoading({ status: true }));
    this.store.dispatch(MailActions.sendMail({ mail: this.contactMail }));
  }

  private getDataInputs(): InputDTO[] {
    return [
      {
        label: 'Nombre',
        placeholder: 'Escriba su nombre',
        type: 'text',
        formControl: this.name,
        required: true,
        errors: [
          {
            type: 'required',
            message: 'Se requiere su nombre',
          },
          {
            type: 'maxlength',
            message: 'Máximo 55 carácteres',
          },
        ],
      },
      {
        label: 'Apellidos',
        placeholder: 'Escriba sus apellidos',
        type: 'text',
        formControl: this.surname,
        required: true,
        errors: [
          {
            type: 'required',
            message: 'Se requiere sus apellidos',
          },
          {
            type: 'maxlength',
            message: 'Máximo 55 carácteres',
          },
        ],
      },
      {
        label: 'Correo electrónico',
        placeholder: 'Escriba su correo electrónico',
        type: 'text',
        formControl: this.email,
        required: true,
        iconLeft: 'email',
        errors: [
          {
            type: 'required',
            message: 'Se requiere sus apellidos',
          },
          {
            type: 'pattern',
            message: 'El formato no es válido',
          },
        ],
      },
      {
        label: 'Consulta',
        placeholder: 'Escriba su consulta',
        type: 'textarea',
        formControl: this.query,
        required: true,
        errors: [
          {
            type: 'required',
            message: 'Escriba la consulta',
          },
          {
            type: 'maxlength',
            message: 'Máximo 255 carácteres',
          },
        ],
      },
      {
        label:
          'He leído y acepto la <a class="button-link" [routerLink]="&apos;privacidad&apos;">Política de Privacidad</a>.',
        placeholder: '',
        type: 'checkbox',
        formControl: this.query,
        required: true,
      },
    ];
  }
}
