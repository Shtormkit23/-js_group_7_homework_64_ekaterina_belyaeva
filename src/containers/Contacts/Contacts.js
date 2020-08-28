import React, {useState} from 'react';
import Header from "../../component/Header/Header";
import './Contacts.css';
import Footer from "../../component/Footer/Footer";
import axiosBlog from "../../axiosBlog";
import Spinner from "../../component/UI/Spinner/Spinner";


const Contacts = props => {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const sendHandler = async event => {
        event.preventDefault();
        setLoading(true);

        const send = {
            message: {...message}
        };
        try {
            await axiosBlog.post('/messages.json', send);
        } finally {
            setLoading(false);
            props.history.push('/');
        }
    };

    const messageDataChanged = event => {
        const name = event.target.name;
        const value = event.target.value;

        setMessage(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    let form = (<form className='inputs' onSubmit={sendHandler}>
        <input
            className="Input" placeholder="Enter your name..."
            type="text" name="name"
            value={message.name}
            onChange={messageDataChanged}
        />
        <input
            className="Input" placeholder="Enter your mail..."
            type="email" name="email"
            value={message.email}
            onChange={messageDataChanged}
        />
        <textarea
            className="Input" placeholder="Enter your message..."
            typeof="text" name="message"
            value={message.message}
            onChange={messageDataChanged}
        />
        <button className='readMore send'>SEND</button>
    </form>);

    if (loading) {
        form = <Spinner/>
    }

    return (
        <>
            <Header/>
            <img src="BlogImg/bg-img.png" className="bg-img bg-img-about" alt="background"/>
            <div className="contacts">
                <h3 className="about-title">.........................................Our contacts</h3>
                <p className="contacts-text">
                    We are always happy to help you and answer all your questions.
                    We are attentive to every request and are available for you around the clock.
                </p>
                <div className='cards'>
                <div className="card">
                    <img src='BlogImg/point.png' alt='icon'/>
                    <h3>Social networks</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vitae elit eu nibh ultricies vehicula sed quis neque.
                    </p>
                </div>
                    <div className="card">
                        <img src='BlogImg/nysha.png' alt='icon'/>
                        <h3>Online consultant</h3>
                        <p>
                            Praesent interdum semper est, vel tincidunt magna gravida a.
                            In egestas ligula pellentesque purus malesuada euismod.
                            Nam gravida.
                        </p>

                    </div>
                    <div className="card">
                        <img src='BlogImg/inst.png' alt='icon'/>
                        <h3>Our email</h3>
                        <p>
                            Nunc vel ante in.
                            ligula sodales vestibulum. Nullam porttitor sem nec ligula
                            ultrices pulvinar. Maecenas ut pretium ante.
                        </p>
                    </div>
                </div>
                <h3 className="about-title title-3">Contact us for any questions</h3>
                {form}
            </div>
            <Footer/>
        </>
    );
};

export default Contacts;