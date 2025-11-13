import { useParams } from "react-router-dom"
import classes from "./Repos.module.css"
import BackBtn from "../components/BackBtn"
import { useEffect, useMemo, useState } from "react"
import type { RepoProps } from "../types/repo"
import Loader from "../components/Loader"
import Repo from "../components/Repo"
import useFavorites from "../hooks/useFavorites"

function Repos() {
    const { username } = useParams()

    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

    const { favorites } = useFavorites()

    useEffect(() => {
        const loadRepos = async function(username: string) {
                setIsLoading(true)

                const res = await fetch(`https://api.github.com/users/${username}/repos`)

                const data = await res.json()

                setIsLoading(false)

                let orderedData = data.sort((a: RepoProps, b: RepoProps) => {
                        return b.stargazers_count - a.stargazers_count
                })

                // orderedData = orderedData.slice(0 ,5)

                setRepos(orderedData)
        }

        if (username) {
                loadRepos(username)
        }
    }, [username])

    const displayed = useMemo(() => {
        if (!repos) return null
        if (!showOnlyFavorites) return repos
        return repos.filter((r) => favorites.includes(r.html_url))
    }, [repos, showOnlyFavorites, favorites])

    // Count of favorites that belong to the currently loaded repos (user-specific)
    const favoritesForUser = useMemo(() => {
        if (!repos) return 0
        return repos.filter((r) => favorites.includes(r.html_url)).length
    }, [repos, favorites])

    if (!repos && isLoading) return <Loader />

    return (
        <div className={classes.repos}>
                <BackBtn />
                <h2>Explore os repositórios do usuário: {username}</h2>
                {/* Filter controls */}
                {repos && repos.length > 0 && (
                    <div className={classes.controls}>
                        <button
                            className={`${classes.control_btn} ${!showOnlyFavorites ? classes.active : ''}`}
                            onClick={() => setShowOnlyFavorites(false)}
                        >Todos</button>
                        <button
                            className={`${classes.control_btn} ${showOnlyFavorites ? classes.active : ''}`}
                            onClick={() => setShowOnlyFavorites(true)}
                        >Favoritos ({favoritesForUser})</button>
                    </div>
                )}

                {displayed && displayed.length === 0 && <p>Este usuário não possui repositórios públicos{' '}{showOnlyFavorites ? 'favoritados.' : ''}</p>}
                {displayed && displayed.length > 0 && (
                        <div className={classes.repos_container}>
                                {displayed.map((repo: RepoProps) => (
                                        <Repo key={repo.html_url} {...repo} />
                                ))}
                        </div>
                )}
        </div>
    )
}

export default Repos