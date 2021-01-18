import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { decrement, increment, reset } from '../counter.actions';
import { countSelector, FeatureState } from '../counter.reducer';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: FeatureState }>) {
    // to verify that Karma is also reporting GREEN, if async operation takes more time
    var o = of(1);
    this.count$ = o.pipe(delay(5000), mergeMap(() => store.select(countSelector).pipe(delay(5000))))

    o.pipe(delay(5000), mergeMap(() => store.select(countSelector).pipe(delay(5000)))).subscribe(count => {
      console.log('countSelector subscribe', count)
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
