import { MdLocationPin } from "react-icons/md"
import type { UserProps } from "../types/user"
import { Link } from "react-router-dom"
import classes from "./User.module.css"

function User({ login, avatar_url, location, followers, following }: UserProps) {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        <p className={classes.location}>
            <MdLocationPin /> <span>{location || "Localização não disponível"}</span>
        </p>
        <div className={classes.stats}>
            <div>
                <p>Seguidores:</p>
                <p className={classes.number}>{followers}</p>
            </div>
            <div>
                <p>Seguindo:</p>    
                <p className={classes.number}>{following}</p>
            </div>
        </div>
        <Link to={`/repos/${login}`}>Ver projetos em destaque</Link>
    </div>
  )
}

export default User
