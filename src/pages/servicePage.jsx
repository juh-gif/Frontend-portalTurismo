
import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import redflores from "../assets/imagens/redflores.webp"
import Carousel from "../components/carousel";

const ServicePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <Hero Background = {redflores} titulo = "Portal de Serviços" paragrafo="Venha conhecer os mais diversos serviços de turismo" rota="#" botao="Conhecer Agora" />
                    <div>
                        <Carousel/>
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )
}

export default ServicePage;