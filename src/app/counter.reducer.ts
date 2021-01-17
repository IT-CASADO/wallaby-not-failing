import { createReducer, createSelector, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  count: FeatureState;
}

export const initialFeatureState: FeatureState =  {
  counter: 0,
};

const _counterReducer = createReducer(
  initialFeatureState,
  on(increment, (state) => ({...state, counter: state.counter + 1})),
  on(decrement, (state) => ({...state, counter: state.counter - 1})),
  on(reset, (state) => ({...state, counter: 0}))
);

export function counterReducer(state: FeatureState, action: any) {
  console.log('counterReducer', state, action);
  return _counterReducer(state, action);
}

export const selectFeature = (state: AppState) => {
  console.log('selectFeature', state);
  return state.count
};

function getCurrentCount(featureState: FeatureState) {
  console.log('getCurrentCount', featureState);
  return featureState.counter;
}

export const countSelector = createSelector(
  selectFeature,
  getCurrentCount,
);

