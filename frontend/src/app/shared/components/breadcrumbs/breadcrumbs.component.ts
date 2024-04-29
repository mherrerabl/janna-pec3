import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  @Input() dataBreadcrumbs: string[] = ['Inicio', 'Tienda', 'Cremas'];
}
