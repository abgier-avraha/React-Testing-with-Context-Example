import { useAsync } from 'react-async-hook';
import { useApi } from '../hooks/ApiProvider';
import './Posts.css';

export function Posts() {
  const api = useApi();
  const fetcher = useAsync(api.getPosts, []);

  if (fetcher.result === undefined) {
    return null;
  }

  return (
    <div className="container">
      {fetcher.result.map((post) => (
        <div key={post.id} className="basic-card basic-card-aqua">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
