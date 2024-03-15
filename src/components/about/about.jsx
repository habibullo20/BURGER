import React from 'react'
import Buger from "../../assets/images.png"
import "./about.css"
export const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about-inner">
                    <a href="#">
                        <img className='about-img' src={Buger} alt="img " width={444} height={400} />
                    </a>
                    <div className="about-items">
                        <p className='about-p'>Haqimizda </p>
                        <h2 className='about-h2'>Odamlar hozirda fast foodlarni ko'p mistemol qilishyapti, Shuning uchun fast foodga ehtiyoj oshib bormoqda       </h2>
                        <p className='about-p1'>
Fast Food biznesini boshlash uchun ko'p narsa kerak. Sizga nafaqat odamlar bilan oziq-ovqat do'konlari, balki kerak
uskunalar sizning marketing samolyotingizni samarali qiladi.</p>
                        <button className='about-btn'>Read more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
