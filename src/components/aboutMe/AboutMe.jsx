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
                    <h1>About Me 🧑‍💻</h1>
                    <p>My name is Amy Hwang and I'm a bootcamp graduate from UPENN LPS Coding.<br></br>
                        I've always had interest in coding and during the bootcamp journey, <br></br>I realized I enjoy creating things that live on the internet.<br></br>
                        <br></br>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. <br></br> </p>
                </div>
            </div>

        </div>

    )
}