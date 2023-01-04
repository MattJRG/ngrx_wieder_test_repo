import { on } from '@ngrx/store';
import { decrement, increment, reset } from './app.actions';
import { initialUndoRedoState, undoRedo, UndoRedoState } from 'ngrx-wieder';

export interface State extends UndoRedoState {
  count: number;
}

export const initialState: State = {
  count: 0,
  ...initialUndoRedoState,
};

const { createUndoRedoReducer } = undoRedo({
  allowedActionTypes: [],
});
export const counterReducer = createUndoRedoReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      count: state.count - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      count: 0,
    };
  })
);
