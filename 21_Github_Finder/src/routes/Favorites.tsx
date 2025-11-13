import { useEffect, useState } from 'react'
import classes from './Repos.module.css'
import BackBtn from '../components/BackBtn'
import Loader from '../components/Loader'
import Repo from '../components/Repo'
import useFavorites from '../hooks/useFavorites'
import type { RepoProps } from '../types/repo'

function parseOwnerRepoFromUrl(url: string){
  try{
    const parts = new URL(url).pathname.split('/').filter(Boolean)
    const owner = parts[0]
    const repo = parts[1]
    return { owner, repo }
  }catch{
    return null
  }
}

function Favorites(){
  const { favorites } = useFavorites()
  const [repos, setRepos] = useState<RepoProps[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    const loadAll = async ()=>{
      setIsLoading(true)
      const results: RepoProps[] = []
      for (const url of favorites){
        const pr = parseOwnerRepoFromUrl(url)
        if (!pr) continue
        try{
          const res = await fetch(`https://api.github.com/repos/${pr.owner}/${pr.repo}`)
          if (!res.ok) continue
          const data = await res.json()
          results.push({
            name: data.name,
            html_url: data.html_url,
            language: data.language,
            stargazers_count: data.stargazers_count,
            forks_count: data.forks_count,
            owner: { login: data.owner?.login }
          })
        }catch{
          // ignore individual failures
        }
      }
      setRepos(results)
      setIsLoading(false)
    }
    if (favorites.length>0) loadAll()
    else {
      // schedule state update to avoid sync setState in effect
      Promise.resolve().then(() => setRepos([]))
    }
  }, [favorites])

  if (isLoading) return <Loader />

  return (
    <div className={classes.repos}>
      <BackBtn />
      <h2>Favoritos ({favorites.length})</h2>
      {repos && repos.length === 0 && <p>Você ainda não favoritou nenhum repositório.</p>}
      {repos && repos.length > 0 && (
        <div className={classes.repos_container}>
          {repos.map((r) => <Repo key={r.html_url} {...r} />)}
        </div>
      )}
    </div>
  )
}

export default Favorites
