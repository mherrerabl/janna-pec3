import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreadcrumbDTO } from '../../models/breadcrumb.dto';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent implements OnInit {
  @Output() emitTitle = new EventEmitter<BreadcrumbDTO>();
  dataBreadcrumbs!: BreadcrumbDTO[];

  constructor(private routeService: RouteService) {
    this.dataBreadcrumbs = this.routeService.generateBreadcrumbs();
    this.sendBreadcrumb(this.dataBreadcrumbs[this.dataBreadcrumbs.length - 1]);
  }
  ngOnInit(): void {}

  sendBreadcrumb(value: BreadcrumbDTO): void {
    this.emitTitle.emit(value);
  }

  /* prevBreadcrumb: BreadcrumbDTO;
  fixedRoutes: BreadcrumbDTO[] = FIXEDROUTES;
  index: number;

  currentUrl: string[];

  constructor(private router: Router, private store: Store<AppState>) {
    this.dataBreadcrumbs = [];
    this.prevBreadcrumb = {
      name: '',
      url: '',
    };
    this.index = 0;
    this.currentUrl = [];

    this.store.select('categories').subscribe((store) => {
      if (
        store.breadcrumb !== undefined &&
        store.breadcrumb.name !== '' &&
        store.breadcrumb !== this.prevBreadcrumb
      ) {
        this.dataBreadcrumbs.push(store.breadcrumb);
        this.prevBreadcrumb = store.breadcrumb;
        this.index++;
        this.sendBreadcrumb(
          this.dataBreadcrumbs[this.dataBreadcrumbs.length - 1]
        );
      }
    });
  }

  ngOnInit(): void {
    this.currentUrl = [];
    this.dataBreadcrumbs = [];
    this.index = 0;
    this.currentUrl = this.router.url
      .slice(1)
      .split('/')
      .filter((val) => val !== 'info' && val !== 'productos');

    if (this.currentUrl.length > 0) {
      this.addBreadcrumbs(this.currentUrl);
      this.sendBreadcrumb(
        this.dataBreadcrumbs[this.dataBreadcrumbs.length - 1]
      );
    }
  }

  

  private loadBreadcrumbsCategory(paramUrl: string): void {
    this.store.dispatch(
      CategoriesAction.getCategoryNamebyUrl({ paramUrl: paramUrl })
    );
  }

  private addBreadcrumbs(urlArray: string[]): void {
    for (let index = 0; index < urlArray.length; index++) {
      let route: BreadcrumbDTO | undefined = undefined;
      route = this.fixedRoutes.find(({ url }) => url === urlArray[index]);

      if (route !== undefined) {
        this.dataBreadcrumbs.push(route);
        this.index++;
      } else if (this.index === this.dataBreadcrumbs.length) {
        this.loadBreadcrumbsCategory(urlArray[index]);
      } else {
        console.log('not found');
      }
    }
  }*/
}

const FIXEDROUTES: BreadcrumbDTO[] = [
  {
    name: 'Tratamientos',
    url: 'tratamientos',
  },
  {
    name: 'Tienda',
    url: 'tienda',
  },
  {
    name: 'Agenda',
    url: 'agenda',
  },
  {
    name: 'Perfil',
    url: 'perfil',
  },
  {
    name: 'Administrador',
    url: 'admin',
  },
];
