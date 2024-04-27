import { Component, Input } from '@angular/core';
import { BadgeInfoDTO } from '../../models/badge-info';

@Component({
  selector: 'app-badge-info',
  templateUrl: './badge-info.component.html',
  styleUrl: './badge-info.component.scss',
})
export class BadgeInfoComponent {
  @Input() dataBadge!: BadgeInfoDTO;

  badgeInfoColor(): string {
    if (this.dataBadge.name === 'Trend') {
      return 'bg-[#FF6F07]';
    } else if (this.dataBadge.name === 'Nuevo') {
      return 'bg-[#F80404]';
    } else if (this.dataBadge.name === '2n 50%') {
      return 'bg-[#0B8B00]';
    } else if (this.dataBadge.name === '3x2') {
      return 'bg-[#00AFFA]';
    }
    return '';
  }
}
