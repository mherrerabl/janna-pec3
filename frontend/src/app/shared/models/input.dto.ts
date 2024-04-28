import { FormControl } from '@angular/forms';
import { InputErrorDTO } from './input-error.dto';

export interface InputDTO {
  label: string;
  placeholder: string;
  type: string;
  formControl: FormControl;
  required: boolean;
  iconRight: string | null;
  iconLeft: string | null;
  errors: InputErrorDTO[];
}
