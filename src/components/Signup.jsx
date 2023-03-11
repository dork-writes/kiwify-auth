import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Signup({ email, perr, password, setE, setP, eerr, changeEmail, changePassword, handleSubmit, setRE, rerr, changeRepemail, repEmail, match, checked, changeChecked, cerr }) {
    return (
        <>
            <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div>
                    <div class="sm:mx-auto sm:w-full sm:max-w-md"><img src={logo} alt="Kiwify"
                        class="mx-auto h-12 w-auto" />
                        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Criar nova conta
                        </h2>
                        <p class="mt-2 text-center text-base leading-5 text-gray-600">
                            Ou {" "}
                            <Link to="/"
                                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                entrar na sua conta existente
                            </Link></p>
                    </div>
                    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm font-medium leading-5 mb-1 text-gray-700"
                                >
                                    E-mail
                                </label>{" "}
                                <div>
                                    {" "}
                                    <input
                                        onFocus={() => setE(1)}
                                        onChange={changeEmail}
                                        onBlur={changeEmail}
                                        value={email}
                                        type="text"
                                        autocomplete="username"
                                        name="email"
                                        class={`form-input block py-2 px-3 border ${eerr.length ? 'border-red-500': 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                                    />{" "}
                                    <p className="text-xs text-red-500 py-1">{eerr}</p>
                                </div>{" "}
                            </div>{" "}
                            <div class="mt-6"><label class="block text-sm font-medium leading-5 mb-1 text-gray-700">
                                Repetir e-mail
                            </label>
                                <div> <input onFocus={() => setRE(1)} value={repEmail} onChange={changeRepemail} onBlur = {changeRepemail} type="email" autocomplete="off" name="null"
                                    class={`form-input block py-2 px-3 border ${rerr.length ? 'border-red-500': 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`} />
                                <p className="text-xs text-red-500 pt-1">{match}</p>
                                <p className="text-xs text-red-500">{rerr}</p>
                                </div>
                            </div>
                            <div class="mt-6">
                                <label
                                    for="password"
                                    class="block text-sm font-medium leading-5 text-gray-700"
                                >
                                    Senha
                                </label>{" "}
                                <div>
                                    {" "}
                                    <input
                                        onFocus={() => setP(1)}
                                        onChange={changePassword}
                                        onBlur={changePassword}
                                        value={password}
                                        type="password"
                                        autocomplete="current-password"
                                        name="password"
                                        class={`form-input block py-2 px-3 border ${perr.length ? 'border-red-500': 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                                    />{" "}
                                    <p className="text-xs text-red-500 py-1">{perr}</p>
                                </div>
                            </div>{" "}
                            <div class="mt-6"><label class="relative flex items-start mt-2">
                                <div class="flex items-center h-5"><input value = {checked} onChange = {changeChecked} type="checkbox"
                                    class={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer`} />
                                </div>
                                <div class="ml-2 text-sm leading-5"><span class="font-medium text-gray-700">Eu li e aceito os <a
                                    href="https://kiwify.com.br/termos-de-uso" target="_blank" class="underline"> termos
                                    de uso</a>, <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank"
                                        class="underline"> termos de licença de uso de software</a>, <a
                                            href="https://kiwify.com.br/politica-de-conteudo" target="_blank" class="underline">
                                        política de conteúdo</a> da Kiwify </span> <p className = "text-red-500">{cerr}</p></div>
                                        
                            </label>
                            </div>
                            <div class="mt-6"><span class="block w-full rounded-md shadow-sm"><button onClick = {handleSubmit}
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Criar conta
                            </button></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
