import * as fromReducer from './app.reducer';
import * as fromActions from './app.actions';

describe('reducer', () => {
  describe('increment action', () => {
    it('increment', () => {
      // GIVEN
      const { initialState } = fromReducer;

      // WHEN
      const action = fromActions.increment();

      // THEN
      const state = fromReducer.counterReducer(initialState, action);
      expect(state.count).toEqual(1);
    });
  });
});
