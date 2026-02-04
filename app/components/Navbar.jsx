"use client" // <--- Crucial para que useState funcione en Next.js App Router
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const openMenu = () => setSideMenuOpen(true);
  const closeMenu = () => setSideMenuOpen(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }})
  }, [])
  return (
    <>
      {/* Fondo decorativo (Header Background) */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:*:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full' />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className='w-28 alt=""' />
        </a>

        {/* --- TU MENÚ DE ESCRITORIO (SE MANTIENE IGUAL) --- */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent" }`}>
          <li><a href="#top" className='font-ovo'>Home</a></li>
          <li><a href="#about" className='font-ovo'>About me</a></li>
          <li><a href="#services" className='font-ovo'>Services</a></li>
          <li><a href="#work" className='font-ovo'>My work</a></li>
          <li><a href="#contact" className='font-ovo'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={()=>setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6 cursor-pointer' />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all ml-4 font-ovo dark:border-white/50 dark:hover:border-white/50 '>
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' />
          </a>

          {/* Botón Hamburguesa para abrir menú móvil */}
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6' />
          </button>
        </div>

        {/* --- MOBILE MENU REPARADO --- */}
        {/* Usamos clases dinámicas para mover el menú basándonos en sideMenuOpen */}
        <ul 
          className={`fixed right-0 top-0 bottom-0 w-64 z-50 dark:bg-darkHover dark:text-white h-screen bg-rose-50 transition-transform duration-500 flex md:hidden flex-col gap-4 py-20 px-10 ${
            sideMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Botón Cerrar Menú Móvil */}
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer' />
          </div>

          <li><a href="#top" className='font-ovo' onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className='font-ovo' onClick={closeMenu}>About me</a></li>
          <li><a href="#services" className='font-ovo' onClick={closeMenu}>Services</a></li>
          <li><a href="#work" className='font-ovo' onClick={closeMenu}>My work</a></li>
          <li><a href="#contact" className='font-ovo' onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar