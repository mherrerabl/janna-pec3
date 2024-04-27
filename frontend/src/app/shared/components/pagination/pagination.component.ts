import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  currentPage: number = 1;
  collection: any[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  constructor(private renderer: Renderer2, private elem: ElementRef) {}

  ngOnInit(): void {
    /* const newContent =
      '<button class="button-s button-link w-auto text-darkGrey"><span class="material-symbols-outlined">chevron_left</span></button>';
    const prev = this.elem.nativeElement.querySelectorAll(
      '.pagination-previous'
    );
    this.renderer.appendChild(prev, newContent);*/
  }
}
