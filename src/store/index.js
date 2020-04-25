// import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import rootReducer from '../reducers'
//
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose
//
// const middlewares = [
//   thunkMiddleware
// ]
//
// if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
//   middlewares.push(require('redux-logger').createLogger())
// }
//
// const enhancer = composeEnhancers(
//   applyMiddleware(...middlewares),
//   // other store enhancers if any
// )
//
// export default function configStore () {
//   const store = createStore(rootReducer, enhancer)
//   return store
// }

import thunkMiddleware from 'redux-thunk'
import { init  } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import updatedPlugin from '@rematch/updated'
import LoadingPlugin from '@rematch/loading'
import models from '@/models'

const middlewares = [
  thunkMiddleware

]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').createLogger())

}

const store = init({
  models,
  middlewares,
  plugins: [
    LoadingPlugin(),
    immerPlugin(),
    updatedPlugin() // 在一定的时间段内防止昂贵（频繁）的获取请求

  ]

})

export default store

