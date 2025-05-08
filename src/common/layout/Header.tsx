import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Sobre Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Proceso', href: '#process' },
  { name: 'Tecnologías', href: '#technologies' },
  { name: 'Clientes', href: '#clients' },
  { name: 'Contacto', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-primary/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            to='/'
            className='text-primary text-3xl font-bold tracking-tighter relative group'
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState({}, '', '/');
            }}
          >
            <span className='relative z-10'>STiGMA</span>
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300' />
          </Link>

          {/* Navegación de escritorio */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const id = item.href.replace('#', '');
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState({}, '', item.href);
                }}
                className='text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium'
              >
                {item.name}
              </Link>
            ))}

            {/* Botón enlazado */}
            <Link to='/cotizar'>
              <Button variant='default' size='sm' className='ml-4'>
                Cotizar Proyecto
              </Button>
            </Link>
          </nav>

          {/* Botón móvil */}
          <button
            className='md:hidden text-foreground hover:text-primary transition-colors'
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil desplegable */}
        <div
          className={cn(
            'md:hidden fixed inset-x-0 top-[60px] bg-black/95 backdrop-blur-lg border-b border-primary/10 transition-all duration-300 ease-in-out',
            isMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          )}
        >
          <nav className='container py-5 flex flex-col space-y-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const id = item.href.replace('#', '');
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState({}, '', item.href);
                  setIsMenuOpen(false);
                }}
                className='text-foreground hover:text-primary transition-colors px-4 py-2 text-lg'
              >
                {item.name}
              </Link>
            ))}

            <div className='pt-2 px-4'>
              <Link to='/cotizar'>
                <Button variant='default' className='w-full'>
                  Cotizar Proyecto
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
