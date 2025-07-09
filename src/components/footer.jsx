import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer className="w-full bg-gradient-to-l from-red-300 to-amber-300 text-black py-2 px-2 shadow-lg mt-auto">
            <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-'1">
                    <p className="text-base text-white"> Nova serra verde. Todos os direitos reservados</p>
                    <p>julia Stefany</p>
                </div>

                <div className="flex space-x-6 text-lg">
                <a href="#" className="hover:text-green-800"><FaFacebookF /></a>
                <a href="#" className="hover:text-green-800"><FaWhatsapp/></a>
                <a href="#" className="hover:text-green-800"><FaInstagram/></a>
                </div>
                
            </div>
        </footer>
        </>
    )
}

export default Footer