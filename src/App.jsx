import pokeSVG from "./assets/poke.svg.png"
import { useState } from "react"
import './styles/app.css'


function App() {

  const [count, setCount] = useState(0)
  const [highScore, setHighScore] = useState(0)

  return (
    <>
    <div className="fullContainer">
      <section className="topBar">
        <div>
          <img src={pokeSVG} alt="" />
        </div>
        <div>
          <p>Score : {count}</p>
          <p>High Score: {highScore}</p>
        </div>
      </section>
    </div>
     
    </>
  )
}

export default App
