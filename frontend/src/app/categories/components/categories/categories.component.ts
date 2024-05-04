import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { BreadcrumbDTO } from '../../../shared/models/breadcrumb.dto';
import { CardSimpleDTO } from '../../../shared/models/card-simple.dto';
import { ImageDTO } from '../../../shared/models/image.dto';
import { isLoading } from '../../../spinner/actions/spinner.actions';
import * as CategoriesAction from '../../actions';
import { CategoryClass } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  categories: CategoryClass[];
  prevCategories: CategoryClass[];
  dataCards: CardSimpleDTO[];
  private urlCategory!: string;
  private urlSubcategory!: string | null;
  breadcrumbs!: BreadcrumbDTO[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.categories = [];
    this.prevCategories = [];
    this.dataCards = [];
    this.breadcrumbs = [];

    this.store.select('categories').subscribe((store) => {
      this.categories = [];
      this.dataCards = [];
      this.categories = store.categories;

      if (
        this.categories.length > 0 &&
        this.categories !== this.prevCategories
      ) {
        setTimeout(() => {
          this.store.dispatch(isLoading({ status: false }));
        });
        for (const category of this.categories) {
          this.createDataCard(category);
        }
        this.prevCategories = this.categories;
      }
    });
  }

  ngOnInit(): void {
    this.categories = [];
    this.dataCards = [];
    console.log(this.route.url);

    this.urlCategory = this.router.url.slice(1);
    this.urlSubcategory = this.route.snapshot.paramMap.get('subcategory');

    if (this.urlSubcategory !== null && this.urlSubcategory !== undefined) {
      this.loadSubcategories(this.urlSubcategory);
    } else {
      this.loadCategories(this.urlCategory);
    }

    this.breadcrumbs.push({
      name: this.urlCategory[0].toUpperCase() + this.urlCategory.slice(1),
      url: this.urlCategory,
    });
  }

  private loadCategories(department: string): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.store.dispatch(
      CategoriesAction.getCategoriesByDepartment({ department: department })
    );
  }

  private loadSubcategories(paramUrl: string): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.store.dispatch(
      CategoriesAction.getCategoriesByParam({ paramUrl: paramUrl })
    );
  }

  private createDataCard(category: CategoryClass): void {
    let newImage: ImageDTO;
    let newCard: CardSimpleDTO;

    if (category.image !== undefined) {
      newImage = {
        title: category.image.title,
        jpg: category.image.picture_jpg,
        webp: category.image.picture_webp,
      };
      newCard = {
        title: category.name,
        url: category.url,
        image: newImage,
      };
      this.dataCards.push(newCard);
    }
  }

  private loadCategoryByUrl(param: string): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.store.dispatch(CategoriesAction.getCategoryByUrl({ paramUrl: param }));
  }
}
