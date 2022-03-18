import "./works.scss"
import cyclist from "../../assets/images/cyclist.png"
import typing_warrior from "../../assets/images/typing_warrior.png"
import workout_tracker from "../../assets/images/workout_tracker.png"
import notetaker from "../../assets/images/notetaker.png"
import budget from "../../assets/images/budget.png"
import card from "../../assets/images/card.png"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Works() {
    useEffect(() => {
        Aos.init({ duration: 2000, offset: 100 });
    }, []);

    return (
        <div className="works" id="works">
            <h1 data-aos="fade-up">Works</h1>
            <div className="container">
            <section className="item">
                    <img src={card} alt="" />
                    <div>
                        <h3>Card Graphix</h3>
                        <p className="description">Our application helps users to create a customized business card design.
                            Options within the application will allow the user to manipulate different aspects of a virtual card and export that design to a PDF.
                            The business cards can then be printed on cardstock with a compatible printer.</p>
                        <br></br>
                        <span className="skills">#Apollo #React JS #Express JS</span>
                        <br></br>
                        <a href="https://card-graphix.herokuapp.com/" class="hvr-shrink">View Project</a>
                        <a href="https://github.com/wl0194/card-graphix" class="hvr-shrink">View Source</a>
                    </div>
                </section>
                <section className="item">
                    <img src={cyclist} alt="" />
                    <div>
                        <h3>Cyclist</h3>
                        <p className="description">
                            This is an application that will allow users to find local places to cycle.
                            They will be able to check their location and show the local weather and information about cycling trails nearby.
                            This allows the users to save time planning work out routine.</p>
                        <br></br>
                        <span className="skills">#JavaScript #HTML #CSS</span>
                        <br></br>
                        <a href="https://wl0194.github.io/Cyclist/" class="hvr-shrink">View Project</a>
                        <a href="https://github.com/wl0194/Project1-" class="hvr-shrink">View Source</a>
                    </div>
                </section>
                <section className="item">
                    <img src={typing_warrior} alt="" />
                    <div>
                        <h3>Typing Warrior</h3>
                        <p className="description">This application is an app that will allow user to test type and find out how fast one types in a given amount of time.
                            We designed typing quotes using API and JS that presents a simple typing challenge and finds the performance of typing by WPS(Words Per Second).</p>
                        <br></br>
                        <span className="skills">#JavaScript #NodeJS #MySQL</span>
                        <br></br>
                        <a href="https://afternoon-reaches-65972.herokuapp.com/" class="hvr-shrink">View Project</a>
                        <a href="https://github.com/wl0194/Typing-Warrior" class="hvr-shrink">View Source</a>
                    </div>
                </section>
                <section className="item">
                    <img src={notetaker} alt="" />
                    <div>
                        <h3>Note Taker</h3>
                        <p className="description">Note Taker is an application that can be used to write and save notes.
                            This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
                        <br></br>
                        <span className="skills">#JavaScript #NodeJS #Express JS</span>
                        <br></br>
                        <a href="https://rocky-thicket-78130.herokuapp.com/" class="hvr-shrink">View Project</a>
                        <a href="https://github.com/wl0194/Note-taker" class="hvr-shrink">View Source</a>
                    </div>
                </section>
                <section className="item">
                    <img src={workout_tracker} alt="" />
                    <div>
                        <h3>Workout Tracker</h3>
                        <p className="description">This is a fitness application built with MongoDB database with a Mongo database with a Mongoose Schema and routes with Express.
                            The user will be able to view create and track daily workouts. The user will be able to log multiple exercises in a workout on a given day.</p>
                        <br></br>
                        <span className="skills"> #MongoDB # Mongoose #Express JS</span>
                        <br></br>
                        <a href="https://lit-forest-07249.herokuapp.com/?id=61e873278d3f9b000bba74d7" class="hvr-shrink">View Project</a>
                        <a href="https://github.com/wl0194/Workout-tracker" class="hvr-shrink">View Source</a>
                    </div>
                </section>
                <section className="item">
                    <img src={budget} alt="" />
                    <div>
                        <h3>You Need a Budget</h3>
                        <p className="description">Using this application, the user will be able to add expenses and deposits to their budget with or without a connection.
                            When entering transactions offline, they should populate the total when brought back online.</p>
                        <br></br>
                        <span className="skills"> #Express JS #MongoDB #NodeJS #PWA</span>
                        <br></br>
                        <a href="https://serene-garden-89587.herokuapp.com/" class="hvr-shrink">View Project</a>
                        <a href="https://github.com/wl0194/You-Need-A-Budget" class="hvr-shrink">View Source</a>
                    </div>
                </section>

            </div>
        </div>
    )
}
