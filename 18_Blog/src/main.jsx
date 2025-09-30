import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import { StrictMode } from 'react'
import { PostsProvider } from './context/PostsContext.jsx'
import Post from './routes/Post.jsx'
import Admin from './routes/Admin.jsx'
import EditPost from './routes/EditPost.jsx'

const router = createBrowserRouter([
  {
    element: <App />, 
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/new',
        element: <NewPost />
      },
      {
        path: '/posts/:id',
        element: <Post />
      },
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/posts/edit/:id',
        element: <EditPost />
      }
    ]
  },
], {
  basename: '/projetos-reactjs/18_Blog'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  </StrictMode>,
)
