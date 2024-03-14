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
                            <a href="">Bosh Sahifa</a>
                        </li>
                        <li>
                            <a href="">Biz Haqimizda</a>
                        </li>
                        <li className="item">
                            <a href="">Menu</a>
                        </li>
                        <li className="item">
                            <a href="">Xususiyatlar</a>
                        </li>
                        <li className="item">
                            <a href="">Bog'lanish</a>
                        </li>
                        
                    </ul>
                </div>
                <div className="box">
                    <button>Hozir buyurtma  qilish
</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
