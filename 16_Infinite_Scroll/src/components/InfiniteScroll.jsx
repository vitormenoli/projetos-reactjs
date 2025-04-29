import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function InfiniteScroll() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchPosts = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );

      if (response.data.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...response.data]);
      } else {
        setHasMoreData(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100 &&
      !isLoading &&
      hasMoreData
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const throttleHandleScroll = throttle(handleScroll, 150);
    window.addEventListener("scroll", throttleHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttleHandleScroll);
    };
  }, [hasMoreData, isLoading]);

  return (
    <>
      <ul className="max-w-7xl bg-gray-100 m-5 p-5 mx-auto rounded-2xl">
        {posts.map((post, index) => (
          <li
            className={`p-5 border border-gray-300 rounded-lg mb-4 transition duration-200 cursor-default ${
              index % 2 === 0
                ? "bg-gray-600 hover:bg-gray-500"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            key={Math.random() * 1000}
          >
            <h3 className="font-bold text-xl text-center mb-2 uppercase">
              {index + 1}. {post.title}
            </h3>
            <p className="text-center">{post.body}</p>

            {index == 119 && (
              <div className="flex flex-col items-center justify-center mt-5 bg-gray-200 rounded-2xl max-w-xl mx-auto">
                <p className="text-3xl text-center m-5 font-bold px-5 py-2 bg-yellow-500 rounded-lg">
                  Você chegou ao fim :)
                </p>

                <a
                  className="mb-5 p-2 rounded-sm transition duration-100 bg-yellow-700 hover:bg-yellow-600 "
                  href="#inicio"
                >
                  Voltar ao topo
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
      {isLoading && <p className="text-center m-5 font-bold text-2xl">Carregando...</p>}
    </>
  );
}

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

export default InfiniteScroll;
