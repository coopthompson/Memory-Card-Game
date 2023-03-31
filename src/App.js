import React, { useState } from "react"
import Card from "./components/card"
import "./styles/playspace.css"

function App() {

  const [allCards, setAllCards] = useState([
    {
      name:"Narset",
      alt:"Narset",
      src:"https://images.ctfassets.net/s5n2t79q9icq/6iZq6AMQkCOGxj9DCzE88F/81464880debeee5b7055144597213bfe/narset-1920.jpg?w=1920&q=70&fm=webp"
    },
    {
      name:"Jace",
      alt:"Jace",
      src:"https://images.ctfassets.net/s5n2t79q9icq/5Z5BZ90db9laZwDh9hO7RP/83ea76b645bfaad7973099d009f67356/jace-beleren-1920.jpg?q=80"
    },
    {
      name:"Teferi",
      alt:"Teferi",
      src:"https://images.ctfassets.net/s5n2t79q9icq/4NU7UmNghishZ4kY6I3dIt/274f43a62a4d123d2d2a521b8ce90358/teferi-akosa-1920.jpg?q=80"
    },
    {
      name:"Daretti",
      alt:"Daretti",
      src:"https://images.ctfassets.net/s5n2t79q9icq/2Bd5jp7irCKkXhNSayrpxK/8216029b6151840e9129b1769f40772c/daretti-1920.jpg?q=80"
    }
  ])

  return (
    <div className="playspace">
      <Card list={allCards} />
    </div>
  );
}

export default App;
