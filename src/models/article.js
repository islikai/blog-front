export default {
  namespace: 'article',
  state: {
    list: []
  },
  effects: {
    * submit({ payload }, { call, put }) {
      // const response = yield call(detail, payload);
      yield put({
        type: 'list',
        payload,
      });
      return true;
    },
  },
  reducers: {
    'list'(state, { payload }) {
      return {
        ...state,
        liet: state.list.push(payload),
      }
    },
  },
};