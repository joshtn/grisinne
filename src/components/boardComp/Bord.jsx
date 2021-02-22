import Cards from './Cards.jsx'

const Bord = ({ onHint, data }) => {
  return (
    <div className='bord-grid'>
        <Cards data={data} onHint={onHint} />
    </div>
  )
}

export default Bord
