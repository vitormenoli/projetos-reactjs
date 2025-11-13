import React, { createContext, useEffect, useState } from 'react'

type FavoritesContextType = {
  favorites: string[]
  isFavorite: (id: string) => boolean
  toggleFavorite: (id: string) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

const STORAGE_KEY = 'favorites'

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return []
      return JSON.parse(raw)
    } catch (_e) {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch (_e) {
      // ignore
    }
  }, [favorites])

  const isFavorite = (id: string) => favorites.includes(id)

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [id, ...prev]))
  }

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
