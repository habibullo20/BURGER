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
                        <p className='about-p'>Haqqimizda </p>
                        <h2 className='about-h2'>Odamlar hozirda fast foodlarni ko'p mistemol qilishyapti, Shuning uchun fast foodga ehtiyoj oshib bormoqda       </h2>
                        <p className='about-p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum maiores recusandae, optio modi alias sed facilis consectetur quaerat sunt debitis. Distinctio totam, ipsum asperiores porro quos culpa ullam consequuntur?</p>
                        <button className='about-btn'>Read More </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
