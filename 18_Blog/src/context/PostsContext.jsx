import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import { PostsContext } from "./PostsContextContext.js";

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carrega os posts ao iniciar
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    try {
      const response = await blogFetch.get("/posts");
      setPosts(response.data);
      setError(null);
    } catch (err) {
      setError("Erro ao carregar posts");
    } finally {
      setLoading(false);
    }
  }

  async function createPost(post) {
    const response = await blogFetch.post("/posts", post);
    // Adiciona o novo post ao estado
    setPosts([response.data, ...posts]);
  }

  async function editPost(id, post) {
    // Se for um post "fake" (criado no frontend), só atualiza o contexto
    if (Number(id) > 100) {
      setPosts(posts.map((p) => (p.id === Number(id) ? { ...p, ...post } : p)));
      return;
    }
    // Se for post "real" da API, faz o PUT normalmente
    const response = await blogFetch.put(`/posts/${id}`, post);
    setPosts(posts.map((p) => (p.id === Number(id) ? response.data : p)));
  }

  const value = {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    editPost,
    setPosts,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
