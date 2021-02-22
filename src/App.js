import './Assets/css/default.min.css'
import Header from './components/headerComp/Header.jsx'
import Bord from './components/boardComp/Bord.jsx'
import Modal from './components/modalComp/Modal.jsx'
import { useState } from 'react'
import data from './data.json'

function App() {
  const [showHint, setShowHint] = useState(false)
  const [charHint, setCharHint] = useState('')
  const [charCurr, setCharCurr] = useState('')
  const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
    console.log(modalState)
  }

  const toggleHint = (id) => {
    // if (showHint === false) {
    //   setShowHint(true)
    // }
    data.map((zhuyin) => {
      if (zhuyin.id === id) {
        setCharHint(zhuyin.hint)
        setCharCurr(zhuyin.char)
      }
    })
  }

  const hintInfo = () => {
    if (charCurr === '') return 'Click a CHAR for pronunciation'

    return (
      <p>
        Char: <b>{charCurr}</b> , hover for hint
      </p>
    )
  }

  return (
    <div className="app">
      <Header onModal={toggleModalState} />
      <Modal open={modalState} toggleOpen={toggleModalState}>
        <div className="modalInner">
          <div className="modalImage">
            <img
              src="https://images.unsplash.com/photo-1613920175775-9418eda8cd59?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
              alt="pic"
            />
          </div>
          <div className="modalText">
            <button className="exitButton" onClick={() => toggleModalState()}>
              X
            </button>
            <h2>About</h2>
            <p>
              This is a tool to help you learn zhuyin. Associating the chars
              with a hint helps me to remember and I hope it will help you too!
              For the sound of the chars, check youtube for zhuyin...
              <br />
              Upcoming feature <br /> Implementation of sound.
            </p>
            <a
              className="git-button"
              href="https://www.github.com/joshtn/grisinne"
            >
              Github Repo
            </a>
          </div>
        </div>
      </Modal>

      <div
        className="hint-toggle"
        onClick={() => setShowHint(!showHint)}
        onMouseEnter={() => setShowHint(true)}
        onMouseLeave={() => setShowHint(false)}
      >
        {hintInfo()}
      </div>
      {showHint && <div className="hint">{charHint}</div>}
      <Bord data={data} onHint={toggleHint} />
    </div>
  )
}

export default App
