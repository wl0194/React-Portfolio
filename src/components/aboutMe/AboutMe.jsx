import "./aboutme.scss"
import profile_image from './profile_image'

export default function AboutMe() {
    return (
        <div className="AboutMe" id="aboutMe">
            <div className="left">
                <div className="imgContainer">
                <img src={profile_image} />
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}
