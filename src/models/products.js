export default {
  namespace: 'products',
  state: {
    list: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 }
    ]
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return {
        ...state,
        products: state.products.filter(item => item.id !== id),
      }
    },
  },
};