// src/domain/technologies/Technologies.tsx
import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    name: 'Frontend',
    techs: [
      { name: 'React', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Vue', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Angular', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Next.js', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Tailwind CSS', logo: '/placeholder.svg?height=60&width=60' },
    ],
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Node.js', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Python', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Java', logo: '/placeholder.svg?height=60&width=60' },
      { name: '.NET', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'PHP', logo: '/placeholder.svg?height=60&width=60' },
    ],
  },
  {
    name: 'Bases de Datos',
    techs: [
      { name: 'MongoDB', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'PostgreSQL', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'MySQL', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Firebase', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Redis', logo: '/placeholder.svg?height=60&width=60' },
    ],
  },
  {
    name: 'DevOps',
    techs: [
      { name: 'Docker', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Kubernetes', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'AWS', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'Azure', logo: '/placeholder.svg?height=60&width=60' },
      { name: 'GitHub Actions', logo: '/placeholder.svg?height=60&width=60' },
    ],
  },
];

export default function Technologies() {
  return (
    <section id='technologies' className='pt-2 pb-20 scroll-mt-20'>
      <div className='container px-4 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className='max-w-4xl mx-auto text-center mb-8'
        >
          <span className='inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4'>
            Tecnologías
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Herramientas de <span className='text-primary'>vanguardia</span>
          </h2>
          <p className='text-lg text-muted-foreground'>
            Utilizamos las tecnologías más modernas y eficientes para
            desarrollar soluciones robustas, escalables y de alto rendimiento.
          </p>
        </motion.div>

        <div className='space-y-12'>
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className='bg-black/50 backdrop-blur-sm border border-teal-400 rounded-xl p-6'
            >
              <h3 className='text-xl font-semibold mb-6 text-primary'>
                {category.name}
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    className='flex flex-col items-center justify-center p-4 bg-black/80 rounded-lg border border-teal-400 hover:border-primary/30 transition-all duration-300'
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      width={60}
                      height={60}
                      className='mb-3'
                    />
                    <span className='text-sm font-medium'>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
