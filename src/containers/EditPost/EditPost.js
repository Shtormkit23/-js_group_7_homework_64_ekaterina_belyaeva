import React, {useEffect, useState} from 'react';
import PostForm from "../../component/PostForm/PostForm";
import axiosBlog from "../../axiosBlog";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import './EditPost.css';
import Spinner from "../../component/UI/Spinner/Spinner";

const EditPost = props => {
    const [editPost, setEditPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const id = props.match.params.id;

    useEffect(() => {
        const getPost = async () => {
            try {
                const postResponse = await axiosBlog.get(`/posts/${id}.json`);
                setEditPost(postResponse.data);
            } finally {
                setLoading(false);
            }
        }
        getPost().catch(console.error);
    }, [id]);

    const changePost = async event => {
        alert(13)
        event.preventDefault();
        const post = {
            ...editPost,
            date: new Date()
        };

        try {
            await axiosBlog.put(`/posts/${id}.json`, post);
        } finally {
            props.history.replace('/');
        }
    }

    const onChangePost = event => {
        const name = event.target.name;
        const value = event.target.value;
        setEditPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    let postForm = (
        <PostForm
            title={editPost.title}
            description={editPost.description}
            sendHandler={event => changePost(event)}
            postDataChanged={onChangePost}
        />
    );

    if (loading) {
        postForm = <Spinner/>
    }

    return (
        <>
            <Header/>
            <div className='edit-post'>
                <h3 className="about-title">Edit post</h3>
                {postForm}
            </div>
            <Footer/>
       </>
    );
};

export default EditPost;