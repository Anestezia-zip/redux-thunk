import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../redux/actions/dataActions';
import Post from './Post';

const Comments = () => {
    const [post, setPost] = useState('')
    const [showPost, setShowPost] = useState(false)

    const dispatch = useDispatch();
    const comments = useSelector((state) => state.data.comments)

    useEffect(() => {
       dispatch(getComments(dispatch))
    }, []);

    const handleCommentClick = (postId) => {
        setPost(postId)
        setShowPost(true)
    }

    return (
        <div style={{ backgroundColor: "lightseagreen", padding: "10px", display: "flex" }}>
            <div>
                <h2>Comments</h2>
                <ul>
                    {comments.slice(0, 15).map((comment) => (
                        <li key={comment.id} onClick={() => handleCommentClick(comment.postId)}>
                            <p>{comment.name}</p>
                            <p><strong>{comment.email}</strong>: {comment.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ backgroundColor: "lightsteelblue", padding: "20px" }}>
                {showPost && (<Post postId={post}/>)}
            </div>
        </div>
    );
};

export default Comments;
