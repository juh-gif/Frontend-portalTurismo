import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import redflores from "../assets/imagens/redflores.webp"

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <Hero Background = {redflores} titulo = "Nova serra Verde" paragrafo="Conheça Nossas Atrações" rota="#" botao="Saiba mais" />
                    <h1 className="text-center"></h1>
                    <div>

                    </div>
                </div>
                    <Footer />
            </div>


        </>
    )
}

export default Home;