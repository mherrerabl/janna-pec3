import { Component, Input } from '@angular/core';
import { BreadcrumbDTO } from '../../models/breadcrumb.dto';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  @Input() dataBreadcrumbs!: BreadcrumbDTO[];
}
