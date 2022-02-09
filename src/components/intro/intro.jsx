import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  useEffect(()=> {
      init(textRef.current, { 

          showCursor: true, 
          disableBackTyping: false,
          backDelay: 1500,
          backSpeed: 60,
          strings: ['Hello, there' ], 
      });

  },[]);

    return (
        <div className="intro" id="intro">
          <h1><span ref={textRef}></span></h1>
        </div>
    )

}
