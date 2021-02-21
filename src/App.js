import './Assets/css/default.min.css'
import Header from './components/headerComp/Header.jsx'
import Bord from './components/boardComp/Bord.jsx'
import Modal from './components/modalComp/Modal.jsx'
import { useState, Fragment } from 'react'
import data from './data.json'
import Keyboardist from 'react-keyboardist'

function App() {
  const [showHint, setShowHint] = useState(false)
  const [charHint, setCharHint] = useState('')
  const [charCurr, setCharCurr] = useState('')
  const [modalState, setModalState] = useState(false)

  let wwwww = 'Char: <b>{charCurr}</b> , hover for hint'

  const [aa, setaa] = useState(0)
  let audio = new Audio('./Assets/test.m4a')

  const playAudio = () => {
    setaa(aa + 1)
    console.log(aa)
    setShowHint(!showHint)
    const audioEl = document.getElementsByClassName('audio-element')[0]
    audioEl.play()
  }

  const tit = () => {
    console.log('tit')
  }

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
        console.log(zhuyin.hint)
      }
    })
  }

  const hintInfo = () => {
    console.log('hintInfo calling')
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
              src="https://images.unsplash.com/photo-1558524590-9616ff728c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
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
              <br /> Patch Notes <br /> Soon: Implement sound.
            </p>
            <button>Github Repo</button>
          </div>
        </div>
      </Modal>
      {console.log(data[0].char)}
      <Keyboardist
        bindings={{
          KeyQ: playAudio,
          KeyT: tit,
        }}
      />

      <div>
        <button className="sound" onClick={playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </div>
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
