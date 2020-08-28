import React from 'react';
import Header from "../../component/Header/Header";
import './About.css';
import Footer from "../../component/Footer/Footer";


const About = () => {
    return (
        <>
            <Header/>
            <img src="BlogImg/bg-img.png" className="bg-img bg-img-about" alt="background"/>
            <div className="about">
                <h3 className="about-title">....................................................About</h3>
                <div className="author">
                    <img src='BlogImg/222.jpg' alt="peony" className='author-img'/>
                    <p>
                        Has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className="about">
                <h3 className="about-title">..................................................Gallery</h3>
                <div className="peonies">
                    <div className="dish">
                        <div className="dish-img"><img src='BlogImg/pion.jpg' alt='peony'/></div>
                        <p>
                            Has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="dish">
                        <div className="dish-img"><img src='BlogImg/123.jpg' alt='peony'/></div>
                        <p>
                            Has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about">
                <h3 className="about-title">..................................................Author</h3>
                <div className="author">
                    <p>
                        Has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                    <img src='BlogImg/inst.png' alt="peony" className='author-img'/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;