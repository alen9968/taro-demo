// export default {
//   state: {
//     count: 0
//   },
//   reducers: {
//     // 方法名需已dispatch开头
//     dispatchSetGlobalInfo(state, payload) {
//       return { ...state, ...payload  }
//     },
//   },
//   effects: {
//   }
// }

import '@tarojs/taro';
import '@tarojs/async-await';

export default {
  state: 0,
  reducers: {
    increment: s => s + 1,
    decrement: s => s - 1,
    up: (s, num) => s + num
  },
  effects: dispatch => {
    return {
      async handleIncrement() {
        await new Promise(resolve => {
          setTimeout(resolve, 500)
        });
        // console.log(...arguments);
        // console.log(rootState);
        dispatch.counter.increment();
      },
      async handleDecrement () {
        // console.log(...arguments);
        // console.log(rootState);
        dispatch.counter.decrement();
      },
    }
  },
}
