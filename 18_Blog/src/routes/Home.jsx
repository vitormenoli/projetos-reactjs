import './Home.css'
import { Link } from 'react-router-dom'
import { usePosts } from '../context/usePosts.js'

function Home() {
  const { posts, loading } = usePosts();

  return (
    <div className='home'>
      <h1>Últimos posts</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        posts.length === 0 ? (
          <p>Nenhum post encontrado.</p>
        ) : (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link>
            </div>
          ))
        )
      )}
    </div>
  );
}

export default Home