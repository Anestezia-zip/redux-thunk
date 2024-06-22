import React from 'react';
import { useEffect, useState } from 'react';
import { Post } from '../redux/reducers/dataReducer.ts';

const PostPage = ({ postId }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Post</h2>
      <p><b>Title:</b> {post.title}</p>
      <p><b>Body:</b> {post.body}</p>
      <p>{postId}</p>
    </div>
  );
};

export default PostPage;