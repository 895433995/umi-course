// import { querySummoner } from 'services/api';
import summonerJson from '../../../../mock/summoner.json';

export default {
  state: {
    summoners: [],
    summonerDetail: {},
    firstCheck: true,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/summoner') {
          dispatch({
            type: 'fetch',
          })
        }
      })
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    }
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      // const summonerData = yield call(querySummoner);
      const summonerData = summonerJson;

      yield put({
        type: 'save',
        payload: {
          summoners: summonerData,
        },
      })
    },
  },
}
