import { useAppDispatch, useAppSelector } from './hooks'

describe('Automatic hooks from Redux', () => {
  it('Should be defined', () => {
    expect(useAppSelector).toBeDefined()
    expect(useAppDispatch).toBeDefined()
  })
})
