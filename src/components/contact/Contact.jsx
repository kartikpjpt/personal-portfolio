import React, { useRef,useState, useContext } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { ThemeContext } from "../../context";
import emailjs from "emailjs-com";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_x2oreh4",
                "template_twc9bwv",
                formRef.current,
                "user_MUaMztVrU7ZWpx3VcYTTJ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="c">
            <div className="c-bg"></div>

            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 967 2927 884
                        </div>

                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            kr.pjpt@gmail.com
                        </div>

                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            149-B, Vinayak Nagar, Jhanwar Road, Jodhpur,
                            Rajasthan
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story? </b>
                        Get in touch. Always available for freelancing if the
                        right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            style={{backgroundColor:darkMode && "#333"}}
                            type="text"
                            placeholder="Name"
                            name="user_name"
                        />
                        <input
                            style={{backgroundColor:darkMode && "#333"}}
                            type="text"
                            placeholder="Subject"
                            name="user_subject"
                        />
                        <input
                            style={{backgroundColor:darkMode && "#333"}}
                            type="text"
                            placeholder="Email"
                            name="user_email"
                        />
                        <textarea
                            style={{backgroundColor:darkMode && "#333"}}
                            rows="5"
                            placeholder="Message"
                            name="message"
                        />
                        <button>Submit </button>
                        {(done) ? (
                            <div className="thank-msg">
                                <p>Thank You...</p>
                            </div>
                        ) : (" ")}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
