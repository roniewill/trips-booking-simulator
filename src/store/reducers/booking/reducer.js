import produce from 'immer';

export default function booking(state = [], action) {
  //console.log('current state: ', state);
  switch (action.type) {
    case 'ADD_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);

        tripIndex >= 0
          ? (draft[tripIndex].amount += 1)
          : draft.push({ ...action.trip, amount: 1 });
      });

    case 'REMOVE_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

        if (tripIndex >= 0) draft.splice(tripIndex, 1);
      });

    case 'UPDATE_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

        if (tripIndex >= 0) draft[tripIndex].amount = Number(action.amount);
      });

    default:
      return state;
  }
}
