'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb,
  FileSearch,
  Code,
  TestTube,
  Rocket,
  HeartHandshake,
} from 'lucide-react';

const processSteps = [
  {
    icon: <Lightbulb className='h-8 w-8' />,
    title: 'Ideación',
    description:
      'Exploramos tus ideas y objetivos para definir el alcance del proyecto.',
    color: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  },
  {
    icon: <FileSearch className='h-8 w-8' />,
    title: 'Planificación',
    description:
      'Diseñamos la arquitectura y definimos las tecnologías a utilizar.',
    color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
  {
    icon: <Code className='h-8 w-8' />,
    title: 'Desarrollo',
    description: 'Implementamos la solución siguiendo metodologías ágiles.',
    color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
  {
    icon: <TestTube className='h-8 w-8' />,
    title: 'Pruebas',
    description: 'Realizamos pruebas exhaustivas para garantizar la calidad.',
    color: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  },
  {
    icon: <Rocket className='h-8 w-8' />,
    title: 'Despliegue',
    description: 'Lanzamos tu solución y te acompañamos en la implementación.',
    color: 'bg-red-500/10 text-red-500 border-red-500/20',
  },
  {
    icon: <HeartHandshake className='h-8 w-8' />,
    title: 'Soporte',
    description: 'Brindamos mantenimiento continuo y mejoras evolutivas.',
    color: 'bg-teal-500/10 text-teal-500 border-teal-500/20',
  },
];

export default function Process() {
  return (
    <section id='process' className='pt-2 pb-20 scroll-mt-20 bg-muted/30'>
      <div className='container px-4 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className='max-w-4xl mx-auto text-center mb-8'
        >
          <span className='inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4'>
            Nuestro Proceso
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Metodología <span className='text-primary'>probada</span> para el
            éxito
          </h2>
          <p className='text-lg text-muted-foreground'>
            Seguimos un proceso estructurado que garantiza resultados de
            calidad, transparencia y eficiencia en cada etapa del desarrollo.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-black/80 backdrop-blur-sm border border-teal-400 rounded-xl p-6 hover:shadow-lg transition-all duration-300'
            >
              <div className={`${step.color} p-4 rounded-xl inline-block mb-4`}>
                {step.icon}
              </div>
              <h3 className='text-xl font-semibold mb-3'>{step.title}</h3>
              <p className='text-muted-foreground'>{step.description}</p>

              <div className='mt-4 pt-4 border-t border-primary/10'>
                <div className='flex items-center'>
                  <div className='h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium'>
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className='h-[2px] flex-grow bg-gradient-to-r from-primary/30 to-transparent ml-2'></div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
