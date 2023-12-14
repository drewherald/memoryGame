import React from 'react'
import '../styles/card.css'

export default function Card({data, name = ["name", "name", 'name', 'name', "name", "name", 'name', 'name'], number = 0}) {
    
    let names = name
  return (
    <div className='card'>
        <div>
            <img src='' alt="" />
        </div>
        <p>{names}</p>

    </div>
  )
}
