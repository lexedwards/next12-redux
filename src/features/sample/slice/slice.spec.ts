import { sampleSlice } from './slice'

describe('Sample Slice Spec', () => {
  it('Should be defined', () => {
    expect(sampleSlice).toBeDefined()
  })

  it('Should inherit default state', () => {
    const actual = sampleSlice.reducer(undefined, { type: 'unknown' })
    expect(actual).toEqual({})
  })

  const INITIAL_STATE = {}

  it('Should customise initial state', () => {
    const actual = sampleSlice.reducer(INITIAL_STATE, { type: 'unknown' })
    expect(actual).toEqual({})
  })
})
