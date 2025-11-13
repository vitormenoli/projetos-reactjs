import { Outlet } from "react-router-dom"

import classes from "./App.module.css"
import ThemeToggle from "./components/ThemeToggle"
import { Link } from 'react-router-dom'
import useFavorites from './hooks/useFavorites'

function FavoritesBadge(){
  const { favorites } = useFavorites()
  return <Link to="/favorites" className={classes.fav_link}>Favoritos ({favorites.length})</Link>
}

function App() {

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>GitHub Finder</h1>
        <div className={classes.header_actions}>
          <FavoritesBadge />
          <ThemeToggle />
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default App
