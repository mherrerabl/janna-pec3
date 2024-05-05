import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { isLoading } from '../../../spinner/actions/spinner.actions';
import { TreatmentClass } from '../../models/treatment';
import * as TreatmentsAction from './../../actions';

@Component({
  selector: 'app-treatment-detail',
  templateUrl: './treatment-detail.component.html',
  styleUrl: './treatment-detail.component.scss',
})
export class TreatmentDetailComponent {
  treatment: TreatmentClass;
  prevTreatment: TreatmentClass;
  private urlTreatment!: string | null;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.treatment = new TreatmentClass('', '', '', 0, 0, '');
    this.prevTreatment = new TreatmentClass('', '', '', 0, 0, '');

    this.store.select('treatments').subscribe((store) => {
      this.treatment = new TreatmentClass('', '', '', 0, 0, '');

      this.treatment = store.treatment;

      if (
        this.treatment.name.length > 0 &&
        this.treatment !== this.prevTreatment
      ) {
        setTimeout(() => {
          this.store.dispatch(isLoading({ status: false }));
        });

        this.prevTreatment = this.treatment;
      }
    });
  }

  ngOnInit(): void {
    this.treatment = new TreatmentClass('', '', '', 0, 0, '');

    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.urlTreatment = this.route.snapshot.paramMap.get('treatment');

    if (this.urlTreatment !== null && this.urlTreatment !== undefined) {
      this.loadTreatments(this.urlTreatment);
    }
  }

  private loadTreatments(paramUrl: string): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.store.dispatch(
      TreatmentsAction.getTreatmentByUrl({ paramUrl: paramUrl })
    );
  }
}
