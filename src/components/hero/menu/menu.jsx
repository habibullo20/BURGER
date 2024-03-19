import "./menu.css"
import Picture from "../../../assets/Mask Group (2).png"
import Picture2 from "../../../assets/Mask Group.png"
import Picture3 from "../../../assets/Mask Group (4).png"
import Picture4 from "../../../assets/Mask Group (6).png"
import Picture5 from "../../../assets/Mask Group (7).png"
import Picture6 from "../../../assets/Mask Group (5).png"
const Menu = () => {
  return (
    <>
    <div className="menu">
        <div className="container">
            <div className="menu-inner">
                <div className="menu-text">
                    <h2 className="menu-h2">
                        MENU
                    </h2>
              
                    <p className="menu-p">
                    Fast Food biznesini boshlash uchun ko'p narsa kerak. Sizga nafaqat odamlar bilan oziq-ovqat do'konlari, balki maxsus jihozlar, mijozlarni boshqarish ko'nikmalari,

                    </p>

                    <div className="cards">
                        <ul className="menu-list">
                            <li className="menu-item">
                                <img src={Picture} alt="" />
                                <h2 className="menu-h4">GRILL</h2>
                                <p className="menu-p3">
                                    16 ming so'm
                                </p>
                            </li>

                            <li className="menu-item">
                                <img src={Picture2} alt="" />
                                <h2 className="menu-h4">Salad</h2>
                                <p className="menu-p3">
                                    12 ming so'm
                                </p>
                            </li>

                            <li className="menu-item">
                                <img src={Picture3} alt="" />
                                <h2 className="menu-h4">Burger</h2>
                                <p className="menu-p3">
                                    10 ming so'm
                                </p>
                            </li>

                            <li className="menu-item">
                                <img src={Picture6} alt="" />
                                <h2 className="menu-h4">Delmonico</h2>
                                <p className="menu-p3">
                                    14 ming so'm
                                </p>
                            </li>

                            <li className="menu-item">
                                <img src={Picture4} alt="" />
                                <h2 className="menu-h4">Tuxum</h2>
                                <p className="menu-p3">
                                    9 ming so'm
                                </p>
                            </li>

                            <li className="menu-item">
                                <img src={Picture5} alt="" />
                                <h2 className="menu-h4"> Melba taomi</h2>
                                <p className="menu-p3">
                                    15 ming so'm
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Menu
