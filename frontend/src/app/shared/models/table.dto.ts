import { RowDTO } from './row.dto';

export interface TableDTO {
  titles: string[];
  rows: RowDTO[];
  action: boolean;
}
