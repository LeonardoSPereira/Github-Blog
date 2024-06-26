import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyles } from './styles/global.ts'
import { router } from './routes/index.tsx'
import { RouterProvider } from 'react-router-dom'
import { IssuesProvider } from './contexts/IssuesContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <IssuesProvider>
        <RouterProvider router={router} />
      </IssuesProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
