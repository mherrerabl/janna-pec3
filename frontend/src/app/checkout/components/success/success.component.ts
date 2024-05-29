import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import * as OrderAction from '../../../orders/actions';
import { isLoading } from '../../../spinner/actions/spinner.actions';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent implements OnInit {
  orderId: string;
  sessionId: string;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.orderId = '';
    this.sessionId = this.activatedRoute.snapshot.paramMap.get(
      'sessionId'
    ) as string;

    console.log(this.sessionId);

    this.store.select('order').subscribe((store) => {
      this.orderId = store.order.id;
    });
  }

  ngOnInit(): void {
    this.loadOrder(this.sessionId);
  }

  private loadOrder(sessionId: string): void {
    setTimeout(() => {
      this.store.dispatch(isLoading({ status: true }));
    });
    this.store.dispatch(
      OrderAction.updateOrderState({
        sessionId: sessionId,
        state: 'Pago realizado',
      })
    );
  }
}
