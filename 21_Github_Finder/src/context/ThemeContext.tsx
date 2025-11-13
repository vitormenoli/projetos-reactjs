import React, { createContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch (_e) {
    // ignore
  }

  if (typeof window !== 'undefined' && window.matchMedia) {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
    return prefersLight ? 'light' : 'dark'
  }

  return 'dark'
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (_e) {
      // ignore
    }

    // apply to root immediately
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
