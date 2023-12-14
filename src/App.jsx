import pokeSVG from "./assets/poke.svg.png"
import { useState, useEffect } from "react"
import './styles/app.css'
import Card from "./components/Card"
import ditto from "./assets/Pokemon-Ditto-Artwork.png"


function App() {

  const [count, setCount] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [urlList, setUrlList] = useState(['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'])
  const [nameList, setNameList] = useState(["loading", "loading", 'loading', 'loading', "loading", "loading", 'loading', 'loading'])
  const [numList, setNumList] = useState([0,1,2,3,4,5,6,7])
  const [isActive, setActive] = useState(false)
  const [checker, setChecker] = useState([])
  const [loaded, setLoaded] = useState(false)

  const load = () => {
    setLoaded(true)
  }

  setTimeout(load, 3000)

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
    setTimeout(function(){setUrlList(ph)}, 2800)
    setTimeout(function(){setNameList(phName)}, 2800)
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const flip = (index) => {

    if(isActive){
      return
    }

    const name = nameList[index]

    if(!checker.includes(name)){
      if(!isActive){
      let ph = checker
      ph.push(name)
      setChecker(ph)
      let c = count
      c++
      setCount(c)}
    }else{
      if(!isActive){
        if(count> highScore){
          setHighScore(count)
        }
        setCount(0)
        setChecker([])
      }
    }
  

    setActive(!isActive)

    if(isActive){
      
    }

    setTimeout(swap, 1000)

  }

  const swap = () => {
    let placeHold = numList
    placeHold = shuffle(numList)
    setNumList(placeHold)
    setActive(false)
    console.log(isActive)
}


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=8&offset=378')
      .then(response => response.json())
      .then(json => pullData(json.results))
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
    <div className={"loading"+" "+`${loaded ? "none" : ""}`}>
      <img src={ditto} alt="" />
      <h1>Loading...</h1>
      <div id="cover-spin"></div>
    </div>
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

        <button className="buttonContainer" onClick={() => {
          flip(numList[0])
          }}>
          <Card data={urlList} name={nameList} number={numList[0]} active = {isActive}/>     
        </button>
        <button className="buttonContainer" onClick={() => flip(numList[1])}>
          <Card data={urlList} name={nameList} number={numList[1]} active = {isActive}/>
        </button>
        <button className="buttonContainer" onClick={() => flip(numList[2])}>
          <Card data={urlList} name={nameList} number={numList[2]} active = {isActive}/>
        </button>
        <button className="buttonContainer" onClick={() => flip(numList[3])}>
          <Card data={urlList} name={nameList} number={numList[3]} active = {isActive}/>
        </button>
        <button className="buttonContainer" onClick={() => flip(numList[4])}>
          <Card data={urlList} name={nameList} number={numList[4]} active = {isActive}/>
        </button>
        <button className="buttonContainer" onClick={() => flip(numList[5])}>
          <Card data={urlList} name={nameList} number={numList[5]} active = {isActive}/>
        </button>
        <button className="buttonContainer" onClick={() => flip(numList[6])}>
          <Card data={urlList} name={nameList} number={numList[6]} active = {isActive}/>
        </button>
        <button className="buttonContainer" onClick={() => flip(numList[7])}>
          <Card data={urlList} name={nameList} number={numList[7]} active = {isActive}/>
        </button>


         
        </div>
      </section>
    
    </div>
     
    </>
  )
}

export default App
