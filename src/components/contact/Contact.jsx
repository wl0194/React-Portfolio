import "./contact.scss"
import { useState } from 'react'
import {
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {


    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
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
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                    {message && <span>Message Sent!</span>}
                </form>
            </div>

        </div>
    )

}
