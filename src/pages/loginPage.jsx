import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import loginForm from "../components/loginForm"
import LoginForm from "../components/loginForm";
import redflores from "../assets/imagens/redflores.webp"

const LoginPage = () => {

    return (

        <>

            <div className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center items-center justify-center"
            style={{ backgroundImage: `url(${redflores})`}}>
                <Navbar />
                <div>
             
                    <div className="min-h-screen flex items-center justify-center ">
                      <LoginForm/>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )



}

export default LoginPage