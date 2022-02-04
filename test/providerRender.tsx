import { Provider } from 'react-redux'
import { makeStore, AppStore } from '~/lib/store'

import React from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'

interface TestRenderOptions extends RenderOptions {}

interface WrapperProps {
  initialStore?: AppStore
  children: React.ReactElement
}

export function Wrapper({ children, initialStore }: WrapperProps) {
  const store = initialStore || makeStore()
  return <Provider store={store}>{children}</Provider>
}

function providerRender(
  ui: React.ReactElement,
  options?: TestRenderOptions,
): ReturnType<typeof rtlRender> {
  const { ...rtlOptions } = options || {}
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper as React.ComponentType,
      ...rtlOptions,
    }),
  }
}

export { providerRender }
