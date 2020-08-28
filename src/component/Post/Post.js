import React from 'react';
import './Post.css';
import {NavLink} from "react-router-dom";

const Post = props => (
    <>
        <div className="post">
            <div className="dateAndTime">Created: {props.data}</div>
            <div className="text">{props.title}</div>
            <NavLink exact to={`/post/${props.id}`} className="readMore">Read more >></NavLink>
        </div>
    </>
);

export default Post;