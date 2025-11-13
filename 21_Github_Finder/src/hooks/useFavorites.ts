import { useContext } from 'react'
import FavoritesContext from '../context/FavoritesContext'

export default function useFavorites(){
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}
