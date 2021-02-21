import React, {useState} from "react"

const Card = ({ card, onHint }) => {
  const [flip, setFlip] = useState(false)
    const LENGTH = 41

    const whenClicked = (e) => {
        if(e.type === 'click') {
        onHint(card.id)
        setFlip(!flip)
        console.log('done')
        }
        else if(e.type === 'contextmenu') {
            console.log('right click')
        }
   }

  return (
     <div
          className={`card ${flip ? 'flip' : ''}`}
          onClick={whenClicked}
          onContextMenu={whenClicked}
          >
          <div className='front'
          >
                {card.char}
          </div>
          <div className="back">
                {card.roman}
          </div>
        </div>
 
        )
    }

export default Card
