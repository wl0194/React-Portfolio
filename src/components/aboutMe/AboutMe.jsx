import "./aboutme.scss"
import profile_image from "../../assets/images/profile_image.png"

export default function AboutMe() {
   
    return (
        <div className="AboutMe" id="aboutMe">
            <div className="left">
                <div className="imgContainer">
                    <img src={profile_image} alt="" />
                </div>
            </div>
            <div className="right">
            <div className="wrapper">
                <h3>My name is Amy Hwang and I'm a</h3> 
                <p>🧑‍💻 Front End Web Developer</p>
            </div>
            </div>

        </div>

    )
}
