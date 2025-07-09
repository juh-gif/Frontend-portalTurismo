import React from "react";
import CardService from "./cardService";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import filipinas from "../assets/imagens/filipinas.jpg"
import veneza from "../assets/imagens/veneza.webp"
import cataratas from "../assets/imagens/cataratas.jpg"
import roma from "../assets/imagens/roma.jpg"
import templo from "../assets/imagens/templo.webp"


const tourist_places = [
    {Image: filipinas, title: "Filipinas", description: "Um descanço para sua mente"},
    {Image: veneza, title: "Veneza", description: "Um grande passeio sobre as águas de Veneza"},
    {Image: cataratas, title: "Cataratas do Iguaçu", description: "Um momento inesquecivel"},
    {Image: roma, title: "Roma", description: "Coliseu um dos monumentos mais emblemáticos"},
    {Image: templo, title: "Tóquio", description: "Templo Sensoji um templo budista em tóquio"},
]
const Carousel = () =>{

    return(
        <>
        <div className=" relative z-10 w-full">
            <h1 className=" text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                Pontos turísticos locais mais visitados
            </h1>
            <div>
                {tourist_places.length < 3 ? (
                    <Swiper
                        slidePerView="auto"
                        spaceBetween={20}
                        loop={true}
                        breakpoints={{
                            640:{
                                slidePerView:2,
                                spaceBetween:20
                            },
                            1024:{
                                slidePerView:3,
                                spaceBetween:30
                            }
                        }}>
                            {tourist_places.map((place, index)=>(
                                <SwiperSlide key={index}>
                                    <CardService
                                     img = {place.Image}
                                     alt = {place.description}
                                     titulo = {place.title}
                                     descricao = {place.description}
                                     link="#"
                                     botao="Saiba Mais" 
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                ):(
                    <Swiper
                    slidePerView="auto"
                    spaceBetween={20}
                    loop={true}
                    breakpoints={{
                        640:{
                            slidePerView:3,
                            spaceBetween:20
                        },
                        1024:{
                            slidePerView:2,
                            spaceBetween:30
                        }
                    }}>
                        {tourist_places.map((place, index)=>(
                            <SwiperSlide key={index}>
                                <CardService
                                 img = {place.Image}
                                 alt = {place.description}
                                 titulo = {place.title}
                                 descricao = {place.description}
                                 link="#"
                                 botao="Saiba Mais" 
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                )}
            </div>
        </div>
        </>
    )
}

export default Carousel