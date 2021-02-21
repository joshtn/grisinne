import ReactDom from 'react-dom'

const Modal  = ({ open, toggleOpen, children  }) => {
    if(!open) return null

    return ReactDom.createPortal(
        <>
        <div className={`modalBg modalShowing-${open}`} onClick={toggleOpen}></div>
        <div className="modal">
            {children}
        </div>
        </>,
        document.getElementById("portal")
   )
}

export default Modal
