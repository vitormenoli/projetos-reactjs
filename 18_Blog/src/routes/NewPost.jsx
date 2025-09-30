import { useNavigate } from 'react-router-dom';
import './NewPost.css'
import { useState } from 'react';
import { usePosts } from '../context/usePosts.js';

function NewPost() {
  const navigate = useNavigate();
  const { createPost } = usePosts();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 };
    await createPost(post);
  navigate('/');
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={handleCreate}>
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
        <input type="submit" value="Criar Post" className="btn-create-post" />
      </form>
    </div>
  );
}

export default NewPost;
