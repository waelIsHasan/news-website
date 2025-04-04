// src/components/PostsList.js
import { useContext } from 'react';
import ApiContext from '../../contexts/ApiContext.js';

const Article = () => {
  const { data, loading, error } = useContext(ApiContext);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data && data.map(post => (
        <li key={post.id}>
          <h1>{post.author}</h1>
          <h2>{post.description}</h2>
          <p>{post.content}</p>
          <img src={post.urlToImage} alt="" />
            <h5>{post.publishedAt}</h5>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Article;