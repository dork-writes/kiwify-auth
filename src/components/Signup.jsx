import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Signup({ email, perr, password, setE, setP, eerr, changeEmail, changePassword, handleSubmit, setRE, rerr, changeRepemail, repEmail, match, changeChecked, cerr }) {
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md"><img src={logo} alt="Kiwify"
                        className="mx-auto h-12 w-auto" />
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Criar nova conta
                        </h2>
                        <p className="mt-2 text-center text-base leading-5 text-gray-600">
                            Ou {" "}
                            <Link to="/kiwify-auth"
                                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                entrar na sua conta existente
                            </Link></p>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-5 mb-1 text-gray-700"
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
                                        autoComplete="username"
                                        name="email"
                                        className={`form-input block py-2 px-3 border ${eerr.length ? 'border-red-500': 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                                    />{" "}
                                    <p className="text-xs text-red-500 py-1">{eerr}</p>
                                </div>{" "}
                            </div>{" "}
                            <div className="mt-6"><label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                                Repetir e-mail
                            </label>
                                <div> <input onFocus={() => setRE(1)} value={repEmail} onChange={changeRepemail} onBlur = {changeRepemail} type="email" autoComplete="off" name="null"
                                    className={`form-input block py-2 px-3 border ${rerr.length || match.length ? 'border-red-500': 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`} />
                                <p className="text-xs text-red-500 pt-1">{match}</p>
                                <p className="text-xs text-red-500">{rerr}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-5 text-gray-700"
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
                                        autoComplete="current-password"
                                        name="password"
                                        className={`form-input block py-2 px-3 border ${perr.length ? 'border-red-500': 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                                    />{" "}
                                    <p className="text-xs text-red-500 py-1">{perr}</p>
                                </div>
                            </div>{" "}
                            <div className="mt-6"><label className="relative flex items-start mt-2">
                                <div className="flex items-center h-5"><input onChange = {changeChecked} type="checkbox"
                                    className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer`} />
                                </div>
                                <div className="ml-2 text-sm leading-5"><span className="font-medium text-gray-700">Eu li e aceito os <a
                                    rel = "noreferrer" href="https://kiwify.com.br/termos-de-uso" target="_blank" className="underline"> termos
                                    de uso</a>, <a rel = "noreferrer" href="https://kiwify.com.br/licenca-de-uso-software" target="_blank"
                                        className="underline"> termos de licença de uso de software</a>, <a
                                            rel = "noreferrer" href="https://kiwify.com.br/politica-de-conteudo" target="_blank" className="underline">
                                        política de conteúdo</a> da Kiwify </span> <p className = "text-red-500">{cerr}</p></div>
                                        
                            </label>
                            </div>
                            <div className="mt-6"><span className="block w-full rounded-md shadow-sm"><button onClick = {handleSubmit}
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Criar conta
                            </button></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
