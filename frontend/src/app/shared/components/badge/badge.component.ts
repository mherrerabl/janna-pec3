import { Component, Input, OnInit } from '@angular/core';
import { BadgeDTO } from '../../models/badge';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent implements OnInit {
  @Input() dataBadge!: BadgeDTO;

  clickedIndex = -1;

  ngOnInit(): void {
    //this.badgeColor();
  }

  selected(i: number): void {
    if (this.clickedIndex === i) {
      this.clickedIndex = -1;
    } else {
      this.clickedIndex = i;
    }
  }
}
