import "./header.css"
const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="header-inner">
                <div className="header-text">
                    <h2>
                        BURGER <span>GRILL</span>
                    </h2>

                    <ul>
                        <li className="item">
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About us</a>
                        </li>
                        <li className="item">
                            <a href="">Menu</a>
                        </li>
                        <li className="item">
                            <a href="">Features</a>
                        </li>
                        <li className="item">
                            <a href="">Contact us</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
