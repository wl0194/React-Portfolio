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
        Aos.init({ duration: 2000, offset: 100 });
    }, []);

    return (
        <div className="AboutMe" id="aboutMe">
            <div className="left" data-aos="fade-right" >
                <div className="imgContainer">
                    <img className="profile" src={profile_image} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div data-aos="fade-up" className="quote">"I do not seek. I find."</div>
                    <br></br>
                    <div data-aos="fade-up" className="aboutme">Hi, my name is <span className="brown">Amy Hwang</span> and I'm a graduate from a full stack bootcamp offered through <span className="brown">University of Pennsylvania. </span>
                        From the moment I produced "Hello World" in the console of my first application, I knew I was hooked into the world of software development. It has offered an engaging challenge to continually learn and improve any skills in creating high-quality software.<br></br><br></br>
                        I'm a <span className="brown">UI focused developer</span> who is not afraid of acquiring new skills and loves tackling new challenges
                        and also I have serious passion for <span className="brown">UI effects</span>, <span className="brown">animations</span> and creating intuitive, dynamic user experiences.<br></br><br></br>
                        What started with a simple "Hello, World" has become a full-fledged passion that only gets more exciting as the years go by.
                        Below you'll find projects I've completed that showcase my skills and general background in developing software.
                        </div>



                    <p className="skillsIcon">
                        <FontAwesomeIcon icon="fa-brands fa-html5" />
                        <FontAwesomeIcon icon="fa-brands fa-css3" />
                    </p>

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