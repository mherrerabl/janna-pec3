import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as CategoriesAction from '../../../categories/actions';

import { DomSanitizer } from '@angular/platform-browser';
import { CategoryClass } from '../../../categories/models/category';
import { CardSimpleDTO } from '../../../shared/models/card-simple.dto';
import { ImageDTO } from '../../../shared/models/image.dto';
import { isLoading } from '../../../spinner/actions/spinner.actions';

@Component({
  selector: 'app-treatments-categories',
  templateUrl: './treatments-categories.component.html',
  styleUrl: './treatments-categories.component.scss',
})
export class TreatmentsCategoriesComponent {
  categories: CategoryClass[];
  dataCards!: CardSimpleDTO[];
  private url!: string;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private sanitizer: DomSanitizer
  ) {
    this.categories = new Array<CategoryClass>();
    this.dataCards = new Array<any>();

    this.store.select('categories').subscribe((store) => {
      this.categories = store.categories;

      if (this.categories.length > 0) {
        for (const category of this.categories) {
          this.createDataCard(category);
        }
      }
    });
  }

  ngOnInit(): void {
    //this.url = this.router.url;
    this.url = 'tratamientos';
    this.loadCategories();
  }

  private loadCategories(): void {
    this.store.dispatch(isLoading({ status: true }));
    this.store.dispatch(
      CategoriesAction.getCategoriesByDepartment({ department: 'Shop' })
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
}
