import { select, delay, all, call, put, putResolve, takeLatest } from 'redux-saga/effects';
import cardApi from '@/client/visaCardApi';

export function* loadFlow() {
    yield all([
        delay(3000)
    ]);
    // let cards = yield call(cardApi.getAll)
}

// export default function* () {
//     yield takeLatest(loadFlow, handleApplicationLoading);
// }