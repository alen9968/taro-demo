export default {
  state: {
    name: '',
    age: 0
  },
  reducers: {
    // 方法名需已dispatch开头
    dispatchSetGlobalInfo(state, payload) {
      return { ...state, ...payload  }
    },
  },
  effects: {
  }
}
