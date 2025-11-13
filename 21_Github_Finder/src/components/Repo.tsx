import { BsCodeSlash } from "react-icons/bs"
import type { RepoProps } from "../types/repo"
import { AiOutlineFork, AiOutlineStar, AiFillStar } from "react-icons/ai"
import { RiGitRepositoryLine } from "react-icons/ri"
import classes from "./Repo.module.css"
import useFavorites from "../hooks/useFavorites"

function Repo({ name, language, html_url, stargazers_count, forks_count, owner }: RepoProps) {
        const { isFavorite, toggleFavorite } = useFavorites()
    const fav = isFavorite(html_url)

    return (
        <div className={classes.repo}>
                                        <div className={classes.header_row}>
                                                <div>
                                                        <h3>{name}</h3>
                                                        {owner && <div className={classes.owner}>by <span>{owner.login}</span></div>}
                                                </div>
                                                <button
                                                        className={classes.favorite_btn}
                                                        aria-pressed={fav}
                                                        onClick={() => toggleFavorite(html_url)}
                                                        title={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                                >
                                                        {fav ? <AiFillStar /> : <AiOutlineStar />}
                                                </button>
                                        </div>
                <p className={classes.language}>
                        <BsCodeSlash />
                        <span>{language || "Linguagem indefinida"}</span>
                </p>
                <div className={classes.stats}>
                        <div>
                                <AiOutlineStar />
                                <span>{stargazers_count}</span>
                        </div>
                        <div>
                                <AiOutlineFork />
                                <span>{forks_count}</span>
                        </div>
                </div>
                <a href={html_url} target="_blank" className={classes.repo_btn} rel="noreferrer">
                        <span>Ver código</span>
                        <RiGitRepositoryLine />
                </a>
        </div>
    )
}

export default Repo