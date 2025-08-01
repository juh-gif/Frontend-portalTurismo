import React, {useState} from "react";
import { Navigate } from "react-router";
import axios from "axios";
const RegisterForm = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://backend-portalturismo-1-q05h.onrender.com/api/users", {
                name: nome,
                email,
               password : senha
            });
            const userData = response.data;
            localStorage.setItem("user", JSON.stringify(userData));
            alert("Usuário cadastrado com sucesso!!");
            Navigate("/");
        } catch (error) {
            console.error("Erro ao cadastrar usuário", error);
            alert("erro ao conectar ao servidor");
        }
    };
    return (
        <>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-white">Cadastrar</h2>
                <form onSubmit={handleSubmit}>
                <div>
                        <label className="text-white">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-amber-300 text-sm sm:text-base text-white"
                            placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <label className="text-white">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-amber-300 text-sm sm:text-base text-white"
                            placeholder="Digite seu email" />
                    </div>
                    <div>
                        <label className="text-white">Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-amber-300 text-sm sm:text-base text-white"
                            placeholder="Digite sua senha" />
                    </div>
                    <button type="submit" className="bg-amber-300 hover:bg-amber-200 px-6 py-2
                    rounded-lg transition duration-300 w-full sm:w-full mt-2 text-white">
                        Cadastrar</button>
                </form>
               
               
            </div>
        </>
    )
}
 
export default RegisterForm