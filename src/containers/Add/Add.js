import React, {useState} from 'react';
import './Add.css';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import PostForm from "../../component/PostForm/PostForm";
import axiosBlog from "../../axiosBlog";
import Spinner from "../../component/UI/Spinner/Spinner";
import * as moment from 'moment'

const Add = props => {
    const [post, setPost] = useState({
        title: '',
        description: ''
    });

    const [spinner, setSpinner] = useState(false);

    const addHandler = async event => {
        event.preventDefault();
        setSpinner(true);
        const date = moment().format('MMMM Do YYYY, h:mm:ss a')
        const posts = {
            ...post,
            date,

        };
        try {
            await axiosBlog.post('/posts.json', posts);
        } finally {
            setSpinner(false);
            props.history.push('/');
        }
    };

    const postDataChanged = event => {
        const name = event.target.name;
        const value = event.target.value;

        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    let form = (
        <PostForm
        sendHandler={addHandler}
        title={post.title}
        description={post.description}
        postDataChanged={postDataChanged}
    />
    );

    if (spinner) {
        form = <Spinner/>
    }
    return (
        <>
            <Header/>
            <img src="BlogImg/bg-img.png" className="bg-img add-img" alt='img'/>
            <div className="add">
                <h3 className="about-title title-3">Add new post</h3>
                {form}
            </div>
            <Footer/>
        </>
    );
};

export default Add;