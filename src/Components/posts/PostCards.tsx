import React from 'react';
import { IPost } from './IPost';

export const PostCards = ({
  posts,
  deletePost,
}: {
  posts: IPost[];
  deletePost: (id?: number) => void;
}) => {

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {posts.length &&
        posts.map((post) => (
          <div className="col" key={post.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
              <div className="card-footer">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => deletePost(post.id)}
                >
                  Delete post
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
  
};

export default PostCards;
