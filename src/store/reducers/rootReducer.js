import { combineReducers } from 'redux';

import booking from '../reducers/booking/reducer';

const rootReducer = combineReducers({
  booking,
});

export default rootReducer;
