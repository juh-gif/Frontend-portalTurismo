import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/aboutHero";
import redflores from "../assets/imagens/redflores.webp"


const aboutpage = () => {
return (


    <>
    <div className="flex flex-col min-h-screen">
            
            <Navbar/>
           
            

<div className="content-wrap p-8">
    <AboutHero img = {redflores}/>
    </div>

        
            <Footer />
        </div>
    
    
    </>
)





}
export default aboutpage