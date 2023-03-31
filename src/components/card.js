import React from "react"
import "../styles/card.css"

const Card = (props) => {
  const {list} = props
  console.log(list)
  const cardList = list.map((card) => 
    <div className="card">
        <img className="card--art" alt={card.alt} src={card.src}/>
        <h2>{card.name}</h2>
    </div>
  )
  console.log(cardList)
  return (
   <>
    {cardList}
   </>
  )
}

export default Card