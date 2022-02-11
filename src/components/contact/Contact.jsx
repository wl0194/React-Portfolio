import "./contact.scss"


export default function Contact() {
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
                <form>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}
