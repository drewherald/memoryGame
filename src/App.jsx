import pokeSVG from "./assets/poke.svg.png"
import { useState, useEffect } from "react"
import './styles/app.css'
import Card from "./components/Card"


function App() {

  const [count, setCount] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [urlList, setUrlList] = useState(['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'])
  const [nameList, setNameList] = useState([])

  

  const pullData = (array) => {
    const ph = []
    const phName = []
    for(let i=0; i<array.length; i++){
      fetch(array[i].url)
      .then(response => response.json())
      .then(json => [json.name, json.sprites.other.home.front_default])
      .then(data => {
                      ph.push(data[1])
                      phName.push(data[0])
                    })
    }
    setUrlList(ph)
    setNameList(phName)
    setTimeout(function(){console.log(phName)}, 3000)
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=8&offset=378')
      .then(response => response.json())
      .then(json => pullData(json.results))
      .then()
  }, [])


  /*
  useEffect(() => {
    for(url in urlList){
      fetch(url)
      .then(response => response.json())
      .then(json => console.log(url))
    }
   
  }, urlList) */




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


      <section>
        <div className="cardBox">
          <div>
            <Card data={urlList} name={nameList} number='0'/>
          </div>
          <div>
            <Card data={urlList} name={nameList} number='0'/>
          </div>
          <div>
            <Card data={urlList} name={nameList} number='0'/>
          </div>
          <div>
            <Card data={urlList} name={nameList} number='0'/>
          </div>
          <div>
            <Card data={urlList} name={nameList} number='0'/>
          </div>
          <div>
            <Card data={urlList} name={nameList} number='0'/>
          </div>
          <div>
            <Card data={urlList} name={nameList} number='0'/>
          </div>
          <div>
            <Card data={urlList} name={nameList} number='0'/>
          </div>
         
        </div>
      </section>
    
    </div>
     
    </>
  )
}

export default App
