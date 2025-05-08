'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Globe,
  Smartphone,
  Database,
  ShoppingCart,
  BarChart,
  Cloud,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../../common/components/ui/Button';
import { cn } from '../../lib/utils';

const services = [
  {
    icon: <Globe className='h-6 w-6' />,
    title: 'Desarrollo Web',
    description:
      'Creamos sitios web y aplicaciones web modernas, responsivas y optimizadas para buscadores.',
    features: [
      'Sitios corporativos',
      'Aplicaciones SPA',
      'Portales web',
      'Intranets',
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: <Smartphone className='h-6 w-6' />,
    title: 'Aplicaciones Móviles',
    description:
      'Desarrollamos apps nativas y multiplataforma para iOS y Android que destacan por su usabilidad.',
    features: [
      'Apps nativas (iOS/Android)',
      'Desarrollo híbrido',
      'PWA',
      'Mantenimiento',
    ],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: <Database className='h-6 w-6' />,
    title: 'Software a Medida',
    description:
      'Diseñamos y desarrollamos soluciones personalizadas que se adaptan a las necesidades específicas de tu negocio.',
    features: ['ERPs', 'CRMs', 'Sistemas de gestión', 'Automatización'],
    color: 'from-purple-500/20 to-violet-500/20',
  },
  {
    icon: <ShoppingCart className='h-6 w-6' />,
    title: 'E-Commerce',
    description:
      'Implementamos tiendas online optimizadas para convertir visitantes en clientes y aumentar tus ventas.',
    features: [
      'Tiendas online',
      'Pasarelas de pago',
      'Catálogos digitales',
      'Gestión de inventario',
    ],
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    icon: <BarChart className='h-6 w-6' />,
    title: 'Consultoría IT',
    description:
      'Asesoramos en la implementación de tecnologías y procesos para optimizar tu infraestructura digital.',
    features: [
      'Auditorías técnicas',
      'Arquitectura de software',
      'Optimización de procesos',
      'Transformación digital',
    ],
    color: 'from-red-500/20 to-pink-500/20',
  },
  {
    icon: <Cloud className='h-6 w-6' />,
    title: 'Cloud & DevOps',
    description:
      'Configuramos y gestionamos tu infraestructura en la nube para garantizar escalabilidad y seguridad.',
    features: ['Migración a la nube', 'CI/CD', 'Monitoreo', 'Seguridad'],
    color: 'from-teal-500/20 to-cyan-500/20',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id='services'
      className='py-20 scroll-mt-20 relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-30'></div>
        <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-20'></div>
      </div>

      <div className='container px-4 mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='max-w-4xl mx-auto text-center mb-16'
        >
          <span className='inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4'>
            Nuestros Servicios
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Soluciones digitales <span className='text-primary'>completas</span>
          </h2>
          <p className='text-lg text-muted-foreground'>
            Ofrecemos una amplia gama de servicios tecnológicos para ayudarte a
            alcanzar tus objetivos de negocio, desde el desarrollo de
            aplicaciones hasta la consultoría estratégica.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Service tabs */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col space-y-3'
          >
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={cn(
                  'flex items-center text-left p-4 rounded-lg transition-all duration-300',
                  activeService === index
                    ? 'bg-primary/10 border-l-4 border-primary'
                    : 'bg-black/50 hover:bg-primary/5 border-l-4 border-transparent'
                )}
              >
                <div
                  className={cn(
                    'p-3 rounded-lg mr-4',
                    activeService === index
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground bg-background'
                  )}
                >
                  {service.icon}
                </div>
                <div>
                  <h3
                    className={cn(
                      'font-medium',
                      activeService === index
                        ? 'text-primary'
                        : 'text-foreground'
                    )}
                  >
                    {service.title}
                  </h3>
                  <p className='text-sm text-muted-foreground line-clamp-1'>
                    {service.description}
                  </p>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Service details */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              'bg-gradient-to-br p-[1px] rounded-2xl',
              services[activeService].color
            )}
          >
            <div className='bg-black/95 backdrop-blur-sm rounded-2xl p-8 h-full'>
              <div className='flex items-center mb-6'>
                <div className='p-3 bg-primary/10 text-primary rounded-lg mr-4'>
                  {services[activeService].icon}
                </div>
                <h3 className='text-2xl font-semibold'>
                  {services[activeService].title}
                </h3>
              </div>

              <p className='text-muted-foreground mb-6'>
                {services[activeService].description}
              </p>

              <div className='mb-8'>
                <h4 className='text-sm font-medium text-primary mb-3'>
                  Incluye:
                </h4>
                <ul className='grid grid-cols-2 gap-2'>
                  {services[activeService].features.map((feature, i) => (
                    <li key={i} className='flex items-center text-sm'>
                      <div className='h-1.5 w-1.5 rounded-full bg-primary mr-2'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className='w-full'>
                Solicitar información <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
