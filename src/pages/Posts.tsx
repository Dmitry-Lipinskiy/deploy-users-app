import React, { useEffect, useState } from 'react';
import { IPost } from '../Components/posts/IPost';
import PostCards from '../Components/posts/PostCards';
import Spinner from '../Components/spinner/Spinner';
import http from '../http';

const Posts = () => {

  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    http.get('posts').then((res) => {
      setPosts(res.data);
      console.log(res.data);
    }).catch((err) => console.log(err));
  };

  const deletePost = (id?: number) => {
    const isDelete = window.confirm('Really delete this post?');
    if (isDelete) {
      http.delete(`posts/${id}`).then((res) => {
        setPosts(posts.filter((post) => post.id !== id));
        console.log(res);
      }).catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h1 className="mb-5">Posts:</h1>
      {posts.length ? (
        <PostCards posts={posts} deletePost={deletePost} />
      ) : (
        <Spinner />
      )}
    </>
  );
  
};

export default Posts;
