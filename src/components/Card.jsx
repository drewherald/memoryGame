import React from 'react'
import '../styles/card.css'

export default function Card({data, name, number = 0, active}) {
    
    let names = name
    
    

    

  return (

        <div className='container'>
            <div className={"card"+" "+`${active ? "flipCard" : ""}`}>
                <div className='front'>
                    <div>
                        <img src={data[number]} alt="" />
                    </div>
                    <p>{names[number]}</p>
                </div>
                <div className={'back'}>
                    
                </div>
            </div>
        </div>
    
  )
}
