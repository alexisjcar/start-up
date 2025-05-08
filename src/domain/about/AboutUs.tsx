'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Users, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id='about' className='pt-2 pb-20 scroll-mt-20'>
      <div className='container px-4 mx-auto'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='max-w-4xl mx-auto text-center mb-8'
        >
          <motion.span
            variants={itemVariants}
            className='inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4'
          >
            Sobre Nosotros
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className='text-3xl md:text-4xl font-bold mb-6'
          >
            Somos más que una{' '}
            <span className='text-primary'>software factory</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-lg text-muted-foreground'
          >
            En STiGMA, combinamos tecnología de vanguardia con creatividad para
            desarrollar soluciones digitales que transforman negocios. Nuestro
            equipo de expertos está comprometido con la excelencia y la
            innovación.
          </motion.p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            {
              icon: <Users className='h-10 w-10' />,
              title: 'Equipo Especializado',
              description:
                'Contamos con profesionales altamente calificados en diferentes áreas de la tecnología.',
              points: [
                'Desarrolladores Full-Stack',
                'Diseñadores UX/UI',
                'Especialistas en DevOps',
                'Consultores de negocio',
              ],
            },
            {
              icon: <Lightbulb className='h-10 w-10' />,
              title: 'Enfoque Innovador',
              description:
                'Aplicamos las últimas tendencias y tecnologías para crear soluciones innovadoras.',
              points: [
                'Metodologías ágiles',
                'Arquitecturas modernas',
                'Tecnologías emergentes',
                'Mejora continua',
              ],
            },
            {
              icon: <Rocket className='h-10 w-10' />,
              title: 'Resultados Comprobados',
              description:
                'Nuestros proyectos han ayudado a empresas a alcanzar sus objetivos de negocio.',
              points: [
                'Aumento de eficiencia',
                'Reducción de costos',
                'Mejora de experiencia',
                'Escalabilidad',
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-black/50 backdrop-blur-sm border border-teal-400 rounded-xl p-6 hover:border-primary/30 transition-all duration-300'
            >
              <div className='text-primary mb-4'>{item.icon}</div>
              <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
              <p className='text-muted-foreground mb-4'>{item.description}</p>
              <ul className='space-y-2'>
                {item.points.map((point, i) => (
                  <li key={i} className='flex items-start'>
                    <CheckCircle className='h-5 w-5 text-primary mr-2 shrink-0' />
                    <span className='text-sm'>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
