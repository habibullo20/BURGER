import "./features.css"
import Picture from "../../assets/Group 94.png"
import Picture2 from "../../assets/food-delivery.png"
import Picture3 from "../../assets/Group 94.png"
const Features = () => {
  return (
    <>
    <div className="features">
        <div className="container">
            <div className="features-inner">
                <div className="features-text">
                    <h2 className="features-h2">
                        Xususiyatlar
                    </h2>
                    <p className="features-p">
                        
                        Yangi ishtiyoq bilan ovqat  
                    </p>
                    
                    <ul className="features-list">
                        <li className="features-item">
                            <img className="features-img" src={Picture} alt="" />
                            <h1 className="features-h1">
                            Sifatli oziq-ovqat
                            </h1>
                            <p className="features-p2">
                            Bu yaxshi pul topish va sizni juda muvaffaqiyatli ijodiy tadbirkor qilish uchun juda xavfsiz yo'l bo'lishi mumkin.
                            </p>
                        </li>

                        <li className="features-item">
                            <img className="features-img" src={Picture2} alt="" />
                            <h1 className="features-h1">
                            Sifatli oziq-ovqat
                            </h1>
                            <p className="features-p2">
                            Bu yaxshi pul topish va sizni juda muvaffaqiyatli ijodiy tadbirkor qilish uchun juda xavfsiz yo'l bo'lishi mumkin.
                            </p>
                        </li>

                        <li className="features-item">
                            <img className="features-img" src={Picture3} alt="" />
                            <h1 className="features-h1">
                            
Oziq-ovqat yetkazib berish
                            </h1>
                            <p className="features-p2">
                            Bu yaxshi pul topish va sizni juda muvaffaqiyatli ijodiy tadbirkor qilish uchun juda xavfsiz yo'l bo'lishi mumkin.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Features
