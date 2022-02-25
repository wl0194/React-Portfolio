import "./aboutme.scss"
import profile_image from "../../assets/images/profile_image.png"
import { motion } from "framer-motion"
import pdf from "../../assets/images/resume.pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

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
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 3 }}
                        className="quote">"I do not seek. I find."</motion.p>
                    <br></br>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 4 }}
                        className="aboutme">Hi, my name is <span className="blue">Amy Hwang</span> and I'm a bootcamp graduate from <span className="blue">UPENN LPS Coding.</span><br></br>
                        I've always had interest in coding and during the bootcamp journey, <br></br>I realized I enjoy creating things that live on the internet.<br></br>
                        <br></br>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</motion.p>
                    <div className="inner-wrapper">
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