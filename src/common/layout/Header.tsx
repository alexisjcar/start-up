import { useState, useEffect } from 'react'
import useSmoothScroll from '../hooks/useSmoothScroll'

const Header = () => {
  useSmoothScroll()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`bg-gray-800 text-white p-4 fixed w-full top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <nav className="container mx-auto flex flex-row justify-between">
        <h1 className="text-xl font-bold">Mi Aplicación</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">Sobre Nosotros</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">Servicios</a>
          <a href="#clients" className="hover:text-blue-400 transition-colors">Clientes</a>
          <a href="#technologies" className="hover:text-blue-400 transition-colors">Tecnologías</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a>
        </div>
      </nav>
    </header>
  )
}

export default Header

