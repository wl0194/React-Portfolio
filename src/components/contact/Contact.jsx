
import "./contact.scss"
import { useForm, ValidationError } from '@formspree/react';
import {
    AiFillGithub, 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
    useEffect(() => {
        Aos.init({duration: 2000, offset: 100});
    }, []);

    const [state, handleSubmit] = useForm("xgedkbqz");
    if (state.succeeded) {
        return <section><p id="submit-confirm">Message Sent!</p></section>;
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <h1 data-aos="fade-right">Let's Connect👋</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p data-aos="fade-right"> 💻 Like what you're seeing? would like to work as a team? </p>
                <br></br>
                <ul data-aos="fade-up" className="contact-icons">
                    <li className="social-icons">
                        <a
                            href="https://github.com/wl0194"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour contact-social-icons"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/amy-hwang-633194216/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour contact-social-icons"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="right">
                <h2 data-aos="fade-right">Hire Me!</h2>
                <br></br>
                <p data-aos="fade-right">Currently I'm looking for full-time front-end/UI job.</p>
                <form data-aos="fade-right" onSubmit={handleSubmit}>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button className="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>

 

        </div>
    );
}


