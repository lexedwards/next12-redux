import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { sampleAPI } from '~/features/sample/services/api'
import { sampleSlice } from '~/features/sample/slice/slice'

export const makeStore = () =>
  configureStore({
    reducer: {
      [sampleSlice.name]: sampleSlice.reducer,
      [sampleAPI.reducerPath]: sampleAPI.reducer,
    },
    middleware: defaultMiddleware =>
      defaultMiddleware().concat(sampleAPI.middleware),
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true })
