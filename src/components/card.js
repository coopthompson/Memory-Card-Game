import React from "react"
import "../styles/card.css"

const Card = (props) => {
  console.log(props.list)
  return (
    <div className="card">
      <img className="card--art" alt="Wrenn" src="https://images.ctfassets.net/s5n2t79q9icq/2rjxGTdeKDoIyqbLleVFTA/c6940ee7f84223f785d9429d4b979cf9/wrenn-and-six-tablet-2x2-background-2448x2448.jpg"/>
      <h2>Wrenn and Six</h2>
    </div>
  )
}

export default Card