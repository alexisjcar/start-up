import { useState } from 'react'
import useSmoothScroll from '../hooks/useSmoothScroll'

const Header = () => {
  useSmoothScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            <a href="#" onClick={scrollToTop}>Mi aplicacion</a>
          </h1>

          {/* Menú de navegación - escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
              Sobre Nosotros
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
              Servicios
            </a>
            <a href="#clients" className="text-gray-300 hover:text-white transition-colors duration-200">
              Clientes
            </a>
            <a href="#technologies" className="text-gray-300 hover:text-white transition-colors duration-200">
              Tecnologías
            </a>
            <a href="#contact" className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
              Contacto
            </a>
          </div>

          {/* Botón de menú hamburguesa - móvil */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú de navegación - móvil */}
        <div
          className={`
            md:hidden fixed left-0 right-0 top-[72px] 
            bg-gray-900/95 backdrop-blur-sm
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Sobre Nosotros
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Servicios
            </a>
            <a
              href="#clients"
              className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Clientes
            </a>
            <a
              href="#technologies"
              className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Tecnologías
            </a>
            <a
              href="#contact"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors text-center"
              onClick={toggleMenu}
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

