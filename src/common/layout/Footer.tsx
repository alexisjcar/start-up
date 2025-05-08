// src/common/layout/Footer.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Send,
} from 'lucide-react';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quickLinks = [
    { name: 'Sobre Nosotros', href: '/#about' },
    { name: 'Servicios', href: '/#services' },
    { name: 'Proceso', href: '/#process' },
    { name: 'Tecnologías', href: '/#technologies' },
    { name: 'Clientes', href: '/#clients' },
    { name: 'Contacto', href: '/#contact' },
  ];

  const servicesList = [
    'Desarrollo Web',
    'Aplicaciones Móviles',
    'Software a Medida',
    'E-Commerce',
    'Consultoría IT',
    'Cloud & DevOps',
  ];

  return (
    <footer className='bg-black/95 border-t border-primary/10 pt-12 pb-6'>
      <div className='container px-4 mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className='space-y-4'
          >
            <Link
              to='/'
              className='text-primary text-2xl font-bold tracking-tighter'
            >
              STiGMA
            </Link>
            <p className='text-muted-foreground'>
              Transformamos ideas en soluciones digitales innovadoras que
              impulsan el crecimiento de tu negocio.
            </p>
            <div className='flex space-x-4'>
              <Button
                size='icon'
                variant='ghost'
                className='h-8 w-8 text-muted-foreground hover:text-primary'
              >
                <Facebook className='h-4 w-4' />
                <span className='sr-only'>Facebook</span>
              </Button>
              <Button
                size='icon'
                variant='ghost'
                className='h-8 w-8 text-muted-foreground hover:text-primary'
              >
                <Twitter className='h-4 w-4' />
                <span className='sr-only'>Twitter</span>
              </Button>
              <Button
                size='icon'
                variant='ghost'
                className='h-8 w-8 text-muted-foreground hover:text-primary'
              >
                <Instagram className='h-4 w-4' />
                <span className='sr-only'>Instagram</span>
              </Button>
              <Button
                size='icon'
                variant='ghost'
                className='h-8 w-8 text-muted-foreground hover:text-primary'
              >
                <Linkedin className='h-4 w-4' />
                <span className='sr-only'>LinkedIn</span>
              </Button>
              <Button
                size='icon'
                variant='ghost'
                className='h-8 w-8 text-muted-foreground hover:text-primary'
              >
                <Github className='h-4 w-4' />
                <span className='sr-only'>GitHub</span>
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className='text-lg font-semibold mb-4'>Enlaces rápidos</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className='text-lg font-semibold mb-4'>Servicios</h3>
            <ul className='space-y-2'>
              {servicesList.map((service, i) => (
                <li key={i}>
                  <Link
                    to='/#services'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className='text-lg font-semibold mb-4'>Newsletter</h3>
            <p className='text-muted-foreground mb-4'>
              Suscríbete para recibir noticias y actualizaciones sobre
              tecnología y desarrollo.
            </p>
            <div className='flex space-x-2'>
              <Input
                type='email'
                placeholder='Tu email'
                className='max-w-[220px]'
              />
              <Button size='icon' type='submit'>
                <Send className='h-4 w-4' />
                <span className='sr-only'>Suscribirse</span>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className='border-t border-primary/10 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} STiGMA. Todos los derechos
              reservados.
            </p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <Link
                to='/#terms'
                className='text-xs text-muted-foreground hover:text-primary transition-colors'
              >
                Términos y Condiciones
              </Link>
              <Link
                to='/#privacy'
                className='text-xs text-muted-foreground hover:text-primary transition-colors'
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
