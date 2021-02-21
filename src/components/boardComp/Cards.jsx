import Card from './Card.jsx'
import React, {useState} from "react"
import Keyboardist from 'react-keyboardist'



const Cards = ({ data, onHint }) => {

  const [count, setCount] = useState(1)

        const next = () => {
          let i = count + 1
        setCount(i)
        console.log(count)
    }
    const test = () => {
        console.log('yyyy')
    }




    return (
        <>
        <Keyboardist
            bindings={{
                Enter: test,
                KeyW: next
            }}
        />
 
            {data.map((card) => (
                <Card key={card.id} card={card} onHint={onHint} />
            ))}
        </>
        )
    }

export default Cards
