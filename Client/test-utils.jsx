import React from 'react'
import {render} from '@testing-library/react'
import { ThemeProvider } from './src/Hooks/useTheme.jsx';
import { UserProvider  } from './src/Hooks/useUser.jsx';

const AllTheProviders = ({children}) => {
  return (
    <ThemeProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}