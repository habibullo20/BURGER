import "./delivery.css"
import Picture from "../../assets/Без названия.png"
const Delivery = () => {
  return (
    <>
    <div className="delivery">
        <div className="container">
            <div className="delivery-inner">
                <div className="delivery-text">
                    <img className="delivery-img" src={Picture} alt="" />

                    <h2 className="delivery-h2">
                      YETKAZIB BERISH XIXMATI QO'RG'ONTEPA BO'YLAB BEPUL
                      <br />
                      <br />
                     <span className="delivery-span">
                     MUROJAT UCHUN TELEFON RAQAMLAR: <br /><br />

+998-91-609-59-11 <br /><br />
+998-99-538-94-18
                     </span>
                    </h2>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Delivery
