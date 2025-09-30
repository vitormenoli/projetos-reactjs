import "./EditPost.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePosts } from '../context/usePosts.js';
import blogFetch from "../axios/config";

function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { posts, editPost } = usePosts();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tenta encontrar o post no contexto
    const found = posts.find((p) => String(p.id) === String(id));
    if (found) {
      setTitle(found.title);
      setBody(found.body);
      setLoading(false);
    } else {
      // Se não encontrar, busca na API
      const getPost = async () => {
        try {
          const response = await blogFetch.get(`/posts/${id}`);
          setTitle(response.data.title);
          setBody(response.data.body);
        } catch (error) {
          setTitle("");
          setBody("");
        } finally {
          setLoading(false);
        }
      };
      getPost();
    }
  }, [id, posts]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 };
    await editPost(id, post);
  navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Editando Post</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <form onSubmit={handleEdit}>
          <div className="form-control">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Digite o título"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="form-control">
            <label htmlFor="body">Conteúdo:</label>
            <textarea
              name="body"
              id="body"
              placeholder="Digite o conteúdo"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </div>
          <input type="submit" value="Editar Post" className="btn-edit" />
        </form>
      )}
    </div>
  );
}

export default EditPost;
