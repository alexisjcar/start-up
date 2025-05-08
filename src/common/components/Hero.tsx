// src/common/components/Hero.tsx
import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className='relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20' />
        <div className='absolute bottom-1/3 right-1/3 w-64 h-64 bg-secondary/30 rounded-full filter blur-3xl opacity-20' />

        {/* Grid Pattern */}
        <div
          className='absolute inset-0
            bg-[linear-gradient(rgba(0,255,255,0.07)_1px,transparent_1px),
                 linear-gradient(90deg,rgba(0,255,255,0.07)_1px,transparent_1px)]
            bg-[size:40px_40px]'
        />
      </div>

      <div className='container px-4 mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Hero Content */}
          <div className='text-center lg:text-left'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-primary uppercase bg-primary/10 rounded-full'
            >
              Software Factory
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'
            >
              Transformamos <span className='text-primary'>ideas</span> en{' '}
              <span className='text-primary'>soluciones</span> digitales
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0'
            >
              Desarrollamos software a medida que impulsa el crecimiento de tu
              negocio. Desde aplicaciones web hasta sistemas empresariales
              complejos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            >
              <Button size='lg' asChild>
                <Link
                  to='#contact'
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState({}, '', '#contact');
                  }}
                >
                  Iniciar Proyecto <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link
                  to='#services'
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('services')
                      ?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState({}, '', '#services');
                  }}
                >
                  Nuestros Servicios
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='relative'
          >
            <div className='relative z-10 bg-black/50 backdrop-blur-sm border border-teal-400 rounded-2xl p-6 shadow-2xl'>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  {
                    icon: <Code className='h-8 w-8' />,
                    title: 'Desarrollo Web',
                    desc: 'Aplicaciones modernas y escalables',
                  },
                  {
                    icon: <Globe className='h-8 w-8' />,
                    title: 'Apps Móviles',
                    desc: 'Experiencias nativas y multiplataforma',
                  },
                  {
                    icon: <Database className='h-8 w-8' />,
                    title: 'Sistemas',
                    desc: 'Software empresarial a medida',
                  },
                  {
                    icon: <Layers className='h-8 w-8' />,
                    title: 'Consultoría',
                    desc: 'Asesoramiento tecnológico',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className='bg-black/80 backdrop-blur-sm border border-teal-400 rounded-xl p-4 hover:border-primary/30 transition-all duration-300'
                  >
                    <div className='text-primary mb-3'>{item.icon}</div>
                    <h3 className='font-medium mb-1'>{item.title}</h3>
                    <p className='text-xs text-muted-foreground'>{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Code snippet decoration */}
              <div className='absolute -bottom-10 -right-10 bg-black/80 backdrop-blur-sm border border-teal-400 rounded-xl p-4 shadow-lg hidden md:block'>
                <pre className='text-xs text-primary/80 font-mono'>
                  <code>{`function STiGMA() {
  return innovation;
}`}</code>
                </pre>
              </div>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10'>
              <div className='absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-xl' />
              <div className='absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-xl' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
