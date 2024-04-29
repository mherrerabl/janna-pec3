import { Component, Input } from '@angular/core';
import { RowDetailDTO } from '../../models/row-detail.dto';

@Component({
  selector: 'app-row-detail',
  templateUrl: './row-detail.component.html',
})
export class RowDetailComponent {
  @Input() dataDetails!: RowDetailDTO[];

  getDays(date: Date): string {
    let days: number;
    let currentDay = new Date();

    days = Math.ceil(
      Math.abs(date.getTime() - currentDay.getTime()) / (1000 * 3600 * 24)
    );

    return days > 1 ? `${days} días` : `${days} día`;
  }
}
