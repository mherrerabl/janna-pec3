import { FormControl } from '@angular/forms';
import { InputErrorDTO } from './input-error.dto';

export interface OptionDTO {
  id: string;
  name: string;
}
export interface InputDTO {
  label: string;
  placeholder: string;
  type: string;
  formControl: FormControl;
  required: boolean;
  iconRight?: string;
  iconLeft?: string;
  options?: OptionDTO[];
  errors?: InputErrorDTO[];
}
