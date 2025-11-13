type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState } from "react"
import { BsSearch } from "react-icons/bs"

import classes from "./Search.module.css"

function Search({ loadUser }: SearchProps) {

  const [username, setUsername] = useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>  {
    if (e.key === "Enter") {
        loadUser(username)
    }
  }

  return (
    <div className={classes.search}>
        <h2>Busque por um usuário:</h2>
        <p>Conheça todos os seus repositórios</p>
        <div className={classes.search_container}>
            <input
                type="text"
                placeholder="Digite o nome do usuário"
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={() => loadUser(username)}
            >
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search