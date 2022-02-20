import "./works.scss"
// import cyclist_screenshot from "../../assets/images/cyclist_screenshot.png"
import image1 from "../../assets/images/image1.png"
import typing_warrior from "../../assets/images/typing_warrior.png"
import workout_tracker from "../../assets/images/workout_tracker.png"
import notetaker from "../../assets/images/notetaker.png"
import budget from "../../assets/images/budget.png"



export default function Works() {
    return (
        <div className="works" id="works">
            <h1>Works.</h1>
            <br></br>
            <div className="container">
                <div className="item">
                    <img src={image1} alt="" />
                    <h3>Cyclist</h3>
                </div>
                <div className="item">
                    <img src={typing_warrior} alt="" />
                    <h3>Typing Warrior</h3>
                </div>
                <div className="item">
                <img src={notetaker} alt="" />
                    <h3>Note Taker</h3>
                </div>
                <div className="item">
                    <img src={workout_tracker} alt="" />
                    <h3>Workout Tracker</h3>
                </div>
                <div className="item">
                    <img src={budget} alt="" />
                    <h3>Budget Tracker</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Card Graphix</h3>
                </div>
                
            </div>
          </div>  
    )
}