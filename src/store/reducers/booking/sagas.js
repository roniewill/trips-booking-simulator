import { call } from 'redux-saga';

import api from '../../../services/api';


funciton* addToReserve(){
    const response = yield call(api.get(`trips/${id})`);
}