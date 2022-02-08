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
                <h2>Hey there!</h2>
                <h3>My name is Amy Hwang and I'm</h3> 
                <h4>Full-Stack Web Developer</h4>
            </div>
            </div>

        </div>

    )
}
