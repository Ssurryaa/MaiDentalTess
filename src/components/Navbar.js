import logo from '../assets/Logo.png';
import Button from './Button';
import React, { useState } from 'react';

const navigation = [
  { name: 'Beranda', href: '/', current: true },
  { name: 'Sistem Pakar', href: '#about', current: false },
  { name: 'Cari Dokter', href: '#cari-dokter', current: false },
  { name: 'Blog', href: '#blog', current: false },
]

const Navbar = () => {
  const buttonName = "Daftar"
  const buttonLink ="/regis"

  return (
    <header class="fixed z-50 top-0 flex w-full">
    <div className="navbar lg:px-20 items-center bg-white bg-opacity-70 shadow-sm backdrop-blur-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
          >
            {navigation.map((item) => (
              <li>
                <a className='active:bg-darkblue' href={item.href}>{item.name}</a>
              </li>
            ))}
            <li>
              <a href="/regis" className="bg-gradient-to-b from-lightblue to-darkblue text-white">Daftar</a>
            </li>
          </ul>
        </div>
        <a href='/'>
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navigation.map((item) => (
            <li>
              <a className='active:bg-darkblue mx-3' href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="mr-4">
          <a
            href="/login"
            className="rounded-full py-3 px-8 text-base font-semibold text-black transition duration-300 ease-in-out hover:opacity-80 active:bg-darkblue active:text-white hover:shadow-lg"
          >
            Masuk
          </a>
        </div>
        <div>
          <Button button={buttonName} link={buttonLink}/>
        </div>
      </div>
    </div>
    </header>
  );
};
export default Navbar;
