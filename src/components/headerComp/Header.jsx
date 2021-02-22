const Header = ({ onModal }) => {
    return (
        <header className='header'>
            <div className='container'>
                <h3 className='logo'>GrisInne - Zhuyin</h3>
                <ul>
                     <li><a onClick={onModal}>About</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
