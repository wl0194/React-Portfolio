import "./contact.scss"
import { useState } from 'react'

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
                <div className="row">
            <div className="twelve columns">
                <ul className="social-links">
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amy-hwang-633194216/"><i
                            class="fa fa-linkedin"></i> LinkedIn</a> |
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/wl0194"><i
                            class="fa fa-github"></i> GitHub</a> |
                        <a target="_blank" rel="noopener noreferrer" href="mailto:amyhh0728@gmail.com"><i
                            class="fa fa-envelope"></i> Email</a> |
                        <a target="_blank" rel="noopener noreferrer" href="./assets/resume.pdf"><i
                            class="fa fa-file-pdf"></i> Resume</a>
                    </li>
                </ul>

            </div>
        
            </div>
            </div>
        )
    
}
