import "./aboutme.scss"
import profile_image from "../../assets/images/profile_image.png"
import pdf from "../../assets/images/resume.pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function AboutMe() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="AboutMe" id="aboutMe">
            < div className="left" data-aos="fade-right" >
                <div className="imgContainer">
                    <img src={profile_image} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div data-aos="fade-up" className="quote">"I do not seek. I find."</div>
                    <br></br>
                    <div data-aos="fade-up" className="aboutme">Hi, my name is <span className="blue">Amy Hwang</span> and I'm a bootcamp graduate from <span className="blue">UPENN LPS Coding.</span><br></br>
                        I've always had interest in coding and during the bootcamp journey, <br></br>I realized I enjoy creating things that live on the internet.<br></br>
                        <br></br>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</div>

                    {/* <p className="skillsIcon">
                        <FontAwesomeIcon icon="fa-brands fa-html5" />
                        <FontAwesomeIcon icon="fa-brands fa-css3" />
                    </p> */}
                    
                    <div data-aos="fade-up" className="inner-wrapper">
                        <Button variant="primary" href={pdf} target="_blank">
                            <AiOutlineDownload />
                            &nbsp;Download CV
                        </Button>
                    </div>
                </div>

            </div>

        </div>

    )
}