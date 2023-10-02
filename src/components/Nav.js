import { useNavigate } from 'react-router-dom'
const Nav = () => {

    const navigate = useNavigate()

    return (
        <nav>
            <div className="logo-container">
                {/* <img src={logo} alt="logo"/> */}
                <div className="icon">LOGO</div>
            </div>
            <div className="controls-container">
                <div className="icon" onClick={() => navigate('/ticket')}>+</div>
                <div className="icon" onClick={() => navigate('/')}>Home</div>
            </div>
        </nav>
    )
}

export default Nav