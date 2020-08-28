import React from 'react';

const PostForm = props => {
    return(
    <>
        <form onSubmit={props.sendHandler}>
            <input
                className="Input" placeholder="Post title..."
                type="text" name="title"
                value={props.title}
                onChange={props.postDataChanged}
            />
            <textarea
                className="Input textarea" placeholder="Post description..."
                typeof="text" name="description"
                value={props.description}
                onChange={props.postDataChanged}
            />
            <button className='readMore send'>ADD</button>
        </form>
    </>
    )
};

export default PostForm;