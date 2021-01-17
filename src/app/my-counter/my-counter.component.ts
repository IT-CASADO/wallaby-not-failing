import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';
import { countSelector, FeatureState } from '../counter.reducer';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent {
  count$: Observable<number>;
  //count$: Observable<FeatureState>;

  constructor(private store: Store<{ count: FeatureState }>) {
    this.count$ = store.select(countSelector);

    // this.count$ = store.select('count');
    store.select(countSelector).subscribe(count => {
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

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
