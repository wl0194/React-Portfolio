import "./contact.scss"
import {useState} from 'react'

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
        </div>
    )
}
