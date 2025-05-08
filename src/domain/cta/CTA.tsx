// src/domain/cta/CTA.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../../common/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5' />
        <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent' />
      </div>

      <div className='container px-4 mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className='max-w-4xl mx-auto text-center'
        >
          <span className='inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4'>
            ¿Listo para comenzar?
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
            Transformemos juntos tu{' '}
            <span className='text-primary'>visión digital</span>
          </h2>
          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Estamos preparados para ayudarte a llevar tu negocio al siguiente
            nivel con soluciones tecnológicas a medida. Contáctanos hoy mismo
            para una consulta gratuita.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
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
                Solicitar presupuesto <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button size='lg' variant='outline' asChild>
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
                Agendar llamada
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
