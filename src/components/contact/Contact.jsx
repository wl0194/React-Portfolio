import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}
