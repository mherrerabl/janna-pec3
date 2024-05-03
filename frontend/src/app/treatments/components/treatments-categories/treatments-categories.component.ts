import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as CategoriesAction from '../../../categories/actions';
import { CategoryDTO } from '../../../categories/models/category.dto';
import { isLoading } from '../../../spinner/actions/spinner.actions';

@Component({
  selector: 'app-treatments-categories',
  templateUrl: './treatments-categories.component.html',
  styleUrl: './treatments-categories.component.scss',
})
export class TreatmentsCategoriesComponent {
  categories: CategoryDTO[];

  private url!: string;

  constructor(private router: Router, private store: Store<AppState>) {
    this.categories = new Array<CategoryDTO>();

    this.store.select('categories').subscribe((categories) => {
      this.categories = categories.categories;
      console.log(this.categories);
    });
  }

  ngOnInit(): void {
    //this.url = this.router.url;
    this.url = 'tratamientos';
    this.loadCategories();
  }

  loadCategories(): void {
    this.store.dispatch(isLoading({ status: true }));
    if ((this.url = 'tratamientos')) {
      this.store.dispatch(
        CategoriesAction.getCategoriesByDepartment({ department: 'Treatments' })
      );
    }
  }
}
