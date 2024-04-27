import { Component, Input } from '@angular/core';
import { BadgeColorDTO } from '../../models/badge-color';

@Component({
  selector: 'app-badge-color',
  templateUrl: './badge-color.component.html',
  styleUrl: './badge-color.component.scss',
})
export class BadgeColorComponent {
  @Input() dataBadge!: BadgeColorDTO;

  badgeColor(): string {
    return 'bg-[' + this.dataBadge.color + ']';
  }
}
