import "./hero.css"
import Picture from "../../assets/burger.png"
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <h2 className="hero-h2">
              Ovqatni yaxshi ovqatga aylantirish orqali vaqtni yaxshi o'tkazish.
            </h2>
            <p className="hero-p">

              Fast Food biznesini boshlash uchun ko'p narsa kerak. Sizga nafaqat odamlar bilan oziq-ovqat do'konlari <br /> balki maxsus jihozlar ham kerak,
            </p>
            <button className="hero-btn">
              Hozir buyurtma bering
            </button>
            <button className="hero-btn2">
              Oziq-ovqat Tafsilotlari

            </button>


          </div>
          <img className="img" src={Picture} alt="img" />

        </div>
      </div>
    </div>

  )
}

export default Hero
