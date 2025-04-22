import { useState, useEffect } from 'react'
import useSmoothScroll from '../hooks/useSmoothScroll'

const Header = () => {
  useSmoothScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <header className={`
      fixed w-full top-0 z-50 
      transition-all duration-300
      ${isScrolled || isMenuOpen ? 'backdrop-blur-lg border-b border-[#00FFFF]/10' : 'bg-transparent'}
    `}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-[#00FFFF] text-2xl font-bold">
            <a href="#" onClick={scrollToTop} className="text-[#00FFFF] hover:text-[#00FFFF]/80 transition-colors duration-300">
              STIGMA
            </a>
          </h1>

          {/* Menú de navegación - escritorio */}
          <div className="hidden md:flex space-x-12">
            <a href="#sobre-nosotros" className="text-[#00FFFF] text-lg hover:text-[#00FFFF]/80 transition-colors">
              Sobre Nosotros
            </a>
            <a href="#servicios" className="text-[#00FFFF] text-lg hover:text-[#00FFFF]/80 transition-colors">
              Servicios
            </a>
            <a href="#clientes" className="text-[#00FFFF] text-lg hover:text-[#00FFFF]/80 transition-colors">
              Clientes
            </a>
            <a href="#tecnologias" className="text-[#00FFFF] text-lg hover:text-[#00FFFF]/80 transition-colors">
              Tecnologías
            </a>
            <a href="#contacto" className="text-[#00FFFF] text-lg hover:text-[#00FFFF]/80 transition-colors">
              Contacto
            </a>
          </div>

          {/* Botón de menú hamburguesa - móvil */}
          <button
            className="md:hidden p-2 text-[#00FFFF] hover:text-white transition-colors duration-300"
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
            ${isScrolled || isMenuOpen ? 'backdrop-blur-sm' : 'bg-black/20'}
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <a
              href="#sobre-nosotros"
              className="text-[#00FFFF] hover:text-[#00FFFF]/80 transition-colors duration-300 px-4 py-2 text-lg"
              onClick={toggleMenu}
            >
              Sobre Nosotros
            </a>
            <a
              href="#servicios"
              className="text-[#00FFFF] hover:text-[#00FFFF]/80 transition-colors duration-300 px-4 py-2 text-lg"
              onClick={toggleMenu}
            >
              Servicios
            </a>
            <a
              href="#clientes"
              className="text-[#00FFFF] hover:text-[#00FFFF]/80 transition-colors duration-300 px-4 py-2 text-lg"
              onClick={toggleMenu}
            >
              Clientes
            </a>
            <a
              href="#tecnologias"
              className="text-[#00FFFF] hover:text-[#00FFFF]/80 transition-colors duration-300 px-4 py-2 text-lg"
              onClick={toggleMenu}
            >
              Tecnologías
            </a>
            <a
              href="#contacto"
              className="text-[#00FFFF] hover:text-[#00FFFF]/80 transition-colors duration-300 px-4 py-2 text-lg"
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