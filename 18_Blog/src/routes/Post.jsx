import React, { useEffect, useState } from 'react'
import './Post.css'
import blogFetch from '../axios/config'
import { Link, useParams } from 'react-router-dom'
import { usePosts } from '../context/usePosts.js';
function Post() {
  const { id } = useParams();
  const { posts } = usePosts();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tenta encontrar o post no contexto
    const found = posts.find((p) => String(p.id) === String(id));
    if (found) {
      setPost(found);
      setLoading(false);
    } else {
      // Se não encontrar, busca na API
      const getPost = async () => {
        try {
          const response = await blogFetch.get(`/posts/${id}`);
          setPost(response.data);
        } catch (error) {
          setPost(null);
        } finally {
          setLoading(false);
        }
      };
      getPost();
    }
  }, [id, posts]);

  return (
    <div className='post-container'>
      {loading ? (
        <p>Carregando...</p>
      ) : post && post.title ? (
        <div className='post'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Post não encontrado.</p>
      )}
      <Link to="/" className='btn-back'>Voltar</Link>
    </div>
  );
}

export default Post