import "./works.scss"
import cyclist from "../../assets/images/cyclist.png"
import typing_warrior from "../../assets/images/typing_warrior.png"
import workout_tracker from "../../assets/images/workout_tracker.png"
import notetaker from "../../assets/images/notetaker.png"
import budget from "../../assets/images/budget.png"
import card from "../../assets/images/card.png"
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";


export default function Works() {
 
    return (
        <div className="works" id="works">
            <h1>Works</h1>
            <br></br>
            <div className="container">
                <div className="item">
                    <a href="https://wl0194.github.io/Cyclist/">
                        <img src={cyclist} alt="" />
                    <a href="https://github.com/wl0194/Project1-" class="hvr-shrink">View Project</a>   
                    </a>
                </div>
                <div className="item">
                    <a href="https://afternoon-reaches-65972.herokuapp.com/">
                        <img src={typing_warrior} alt="" />
                    <a href="https://github.com/wl0194/Typing-Warrior" class="hvr-shrink">View Project</a>   
                    </a>
                </div>
                <div className="item">
                    <a href="https://rocky-thicket-78130.herokuapp.com/">
                        <img src={notetaker} alt="" />
                        <a href="https://github.com/wl0194/Note-taker" class="hvr-shrink">View Project</a>  
                    </a>
                </div>
                <div className="item">
                    <a href="https://lit-forest-07249.herokuapp.com/?id=61e873278d3f9b000bba74d7">
                        <img src={workout_tracker} alt="" />
                        <a href="https://github.com/wl0194/Workout-tracker" class="hvr-shrink">View Project</a>  
                    </a>
                </div>
                <div className="item">
                    <a href="https://serene-garden-89587.herokuapp.com/">
                        <img src={budget} alt="" />
                        <a href="https://github.com/wl0194/You-Need-A-Budget" class="hvr-shrink">View Project</a>  
                    </a>
                </div>
                <div className="item">
                    <a href="https://card-graphix.herokuapp.com/">
                        <img src={card} alt="" />
                        <a href="https://github.com/wl0194/card-graphix" class="hvr-shrink">View Project</a> 
                    </a>
                </div>

            </div>
        </div>
    )
}
