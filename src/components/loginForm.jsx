import React, { useState } from "react"

const LoginForm = () => {
       const [email ,setEmail] = useState('')
       const [senha, setSenha] = useState ('')


       const handleSubmit = (e) =>{
               e.preventDefault();
               alert(`Email: ${email} \nSenha:${senha}`)



       }

    return (

        <>
<div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
<h2 className="text-2xl font-semibold text-center mb-6 text-white"> Login</h2>
<form onSubmit={handleSubmit}>
    <div>
        <label className="block text-white font-medium mb-1">E-mail </label>
    <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-white p-2 rounded-md focus:outline-none focus:ring-2 focus:to-amber-200-200 text-sm sm:text-base text-white"
                    placeholder="Digite seu E-mail"/>

    </div>
    <div>
<label className="block  text-white font-medium mb-1">Senha</label>
<input 
                    id="password"
                    type="password"
                    name="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    className="w-full border border-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 text-sm sm:text-base text-white"
                    placeholder="Digite sua Senha"/>

    </div>     <button type="submit" className="bg-amber-300 hover:bg-anber-200 hover:scale-90 transform-border px-6 py-2
                    rounded-lg transition duration-300 w-full sm:w-full mt-2 text-white">
 
    Entrar
    </button>
</form>
<p className=" mt-6 text-center text-sm text-gray-600">Não tem conta?
<a href="/register" className="text-amber-400 hover:underline text-center p-2">Cadastre-se</a>
</p>

</div>
        </> 
    )
}

export default LoginForm