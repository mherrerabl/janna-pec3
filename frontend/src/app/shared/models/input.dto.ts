import { InputErrorDTO } from './input-error.dto';

export interface InputDTO {
  field: string;
  label: string;
  placeholder: string;
  type: string;
  formControl: any;
  required: boolean;
  icon: string | null;
  errors: InputErrorDTO[];
}
