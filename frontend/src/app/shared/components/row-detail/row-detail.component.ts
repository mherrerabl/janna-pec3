import { Component, Input } from '@angular/core';
import { BadgeDTO } from '../../models/badge.dto';
import { ImageDTO } from '../../models/image.dto';
import { ListProductsDTO } from '../../models/list-products.dto';
import { RowDetailDTO } from '../../models/row-detail.dto';

@Component({
  selector: 'app-row-detail',
  templateUrl: './row-detail.component.html',
  styleUrl: './row-detail.component.scss',
})
export class RowDetailComponent {
  @Input() dataDetails!: RowDetailDTO[];
  dataRow!: string | string[] | ListProductsDTO[] | ImageDTO[] | BadgeDTO[];

  correctType(
    data: string | string[] | ListProductsDTO[] | ImageDTO[] | BadgeDTO[],
    type: string
  ): any {}
}
