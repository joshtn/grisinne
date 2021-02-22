import Card from './Card.jsx'

const Cards = ({ data, onHint }) => {
    return (
        <>
            {data.map((card) => (
                <Card key={card.id} card={card} onHint={onHint} />
            ))}
        </>
        )
    }

export default Cards
