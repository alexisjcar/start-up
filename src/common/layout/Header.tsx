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
    <header className="fixed w-full top-0 z-50 bg-[#051622]/90 backdrop-blur-sm border-b border-[#00FFFF]/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <a href="#" onClick={scrollToTop} className="text-[#00FFFF] hover:text-[#00FFFF]/80 transition-colors duration-300">
              STIGMA
            </a>
          </h1>

          {/* Menú de navegación - escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="px-4 py-2 text-[#00FFFF] border-2 border-transparent hover:border-[#00FFFF]/20 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300">
              Sobre Nosotros
            </a>
            <a href="#services" className="px-4 py-2 text-[#00FFFF] border-2 border-transparent hover:border-[#00FFFF]/20 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300">
              Servicios
            </a>
            <a href="#clients" className="px-4 py-2 text-[#00FFFF] border-2 border-transparent hover:border-[#00FFFF]/20 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300">
              Clientes
            </a>
            <a href="#technologies" className="px-4 py-2 text-[#00FFFF] border-2 border-transparent hover:border-[#00FFFF]/20 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300">
              Tecnologías
            </a>
            <a href="#contact" className="px-6 py-2 text-[#00FFFF] border-2 border-[#00FFFF] hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300">
              Contacto
            </a>
          </div>

          {/* Botón de menú hamburguesa - móvil */}
          <button
            className="md:hidden p-2 text-[#00FFFF] border-2 border-transparent hover:border-[#00FFFF]/20 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
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
            bg-[#051622]/95 backdrop-blur-sm border-b border-[#00FFFF]/10
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-[#00FFFF] border-2 border-transparent hover:border-[#00FFFF]/20 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-4 py-2"
              onClick={toggleMenu}
            >
              Sobre Nosotros
            </a>
            <a
              href="#services"
              className="text-[#00FFFF] border-2 border-transparent hover:border-[#00FFFF]/20 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-4 py-2"
              onClick={toggleMenu}
            >
              Servicios
            </a>
            <a
              href="#clients"
              className="text-[#00FFFF] border-2 border-transparent hover:border-[#00FFFF]/20 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-4 py-2"
              onClick={toggleMenu}
            >
              Clientes
            </a>
            <a
              href="#technologies"
              className="text-[#00FFFF] border-2 border-transparent hover:border-[#00FFFF]/20 hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-4 py-2"
              onClick={toggleMenu}
            >
              Tecnologías
            </a>
            <a
              href="#contact"
              className="text-[#00FFFF] border-2 border-[#00FFFF] hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-4 py-2 text-center"
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

