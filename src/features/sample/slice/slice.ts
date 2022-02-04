import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '~/lib/store'

export interface ISampleState {}

const initialState: ISampleState = {}

export const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {},
})
