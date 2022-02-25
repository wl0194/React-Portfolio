
import "./contact.scss"
import { useForm, ValidationError } from '@formspree/react';
import {
    AiFillGithub, 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    const [state, handleSubmit] = useForm("xgedkbqz");
    if (state.succeeded) {
        return <section><p id="submit-confirm">Message Sent!</p></section>;

    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <h1>Let's Connect👋</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p> 💻 Like what you're seeing? would like to work as a team? </p>
                <br></br>
                <ul className="contact-icons">
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
                <h2>Hire Me!</h2>
                <br></br>
                <p>Currently I'm looking for full-time front-end/UI job.</p>
                <form onSubmit={handleSubmit}>
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


