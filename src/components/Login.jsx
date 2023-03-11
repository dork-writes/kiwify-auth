import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Login({email, perr, password, setE, setP, eerr, changeEmail, changePassword, handleSubmit}) {

  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div>
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          src={logo}
          alt="Workflow"
          class="mx-auto h-12 w-auto"
        />{" "}
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Entrar na sua conta
        </h2>{" "}
        <p class="mt-2 text-center text-base leading-5 text-gray-600">
          Ou{" "}
          <Link
            to="/signup"
            class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            fazer cadastro
          </Link>
        </p>
      </div>{" "}
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form onSubmit = {handleSubmit} class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                onFocus={()=>setE(1)}
                onChange = {changeEmail}
                onBlur = {changeEmail}
                value = {email}
                type="text"
                autocomplete="username"
                name="email"
                class={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${eerr.length ? 'border-red-500': 'border-gray-300'}`}
              />{" "}
              <p className = "text-xs text-red-500 py-1">{eerr}</p>
            </div>{" "}
          </div>{" "}
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
                onFocus={()=>setP(1)}
                onChange = {changePassword}
                onBlur = {changePassword}
                value = {password}
                type="password"
                autocomplete="current-password"
                name="password"
                class={`form-input ${perr.length ? 'border-red-500': 'border-gray-300'} block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
              />{" "}
              <p className = "text-xs text-red-500 py-1">{perr}</p>
            </div>
          </div>{" "}
          <div class="mt-2 flex items-center justify-end">
            <div class="text-sm leading-5">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Esqueceu a senha?
              </a>
            </div>
          </div>{" "}
          
          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                {" "}
                Entrar
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
