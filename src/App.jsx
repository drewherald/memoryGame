import pokeSVG from "./assets/poke.svg.png"
import { useState } from "react"
import './styles/app.css'
import Card from "./components/Card"


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
      <body>
        <div className="cardBox">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
         
        </div>
      </body>
    
    </div>
     
    </>
  )
}

export default App
