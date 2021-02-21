import Cards from './Cards.jsx'


const Bord = ({ onHint, data }) => {
  return (
    <div className='bord-grid'>
      {/* {tasks.map((task, index) => ( */}
      {/*   <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} /> */}
      {/* ))} */}
        <Cards data={data} onHint={onHint} />
    </div>
  )
}

export default Bord
