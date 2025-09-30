import "./Admin.css";
import { Link } from "react-router-dom";
import { usePosts } from '../context/usePosts.js';
import blogFetch from "../axios/config";

function Admin() {
  const { posts, loading, setPosts } = usePosts();

  const deletePost = async (id) => {
    await blogFetch.delete(`/posts/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        posts.length === 0 ? (
          <p>Nenhum post encontrado.</p>
        ) : (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <div className="actions">
                <Link className="edit-btn" to={`/posts/edit/${post.id}`}>Editar</Link>
                <button className="delete-btn" onClick={() => deletePost(post.id)}>Excluir</button>
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
}

export default Admin;
