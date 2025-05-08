// src/domain/clients/Clients.tsx
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';

// Testimonios de clientes
const testimonials = [
  {
    name: 'Carlos Rodríguez',
    position: 'CEO, TechSolutions',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'STiGMA transformó nuestra idea en una plataforma robusta que superó nuestras expectativas. Su equipo fue profesional y comprometido durante todo el proceso.',
    rating: 5,
  },
  {
    name: 'María González',
    position: 'Directora de Marketing, InnovateMKT',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'Trabajar con STiGMA fue una experiencia excepcional. Entendieron perfectamente nuestras necesidades y entregaron un producto de alta calidad en el tiempo acordado.',
    rating: 5,
  },
  {
    name: 'Alejandro Martínez',
    position: 'Fundador, StartupX',
    image: '/placeholder.svg?height=80&width=80',
    content:
      'La capacidad técnica y creatividad del equipo de STiGMA nos permitió lanzar nuestra aplicación en tiempo récord. Definitivamente seguiremos trabajando con ellos.',
    rating: 4,
  },
];

// Logos de empresas
const clients = [
  { name: 'Cliente 1', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Cliente 2', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Cliente 3', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Cliente 4', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Cliente 5', logo: '/placeholder.svg?height=60&width=120' },
  { name: 'Cliente 6', logo: '/placeholder.svg?height=60&width=120' },
];

export default function Clients() {
  return (
    <section id='clients' className='pt-2 pb-20 scroll-mt-20 bg-muted/30'>
      <div className='container px-4 mx-auto'>
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className='max-w-4xl mx-auto text-center mb-8'
        >
          <span className='inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4'>
            Clientes Satisfechos
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Lo que dicen nuestros <span className='text-primary'>clientes</span>
          </h2>
          <p className='text-lg text-muted-foreground'>
            Hemos ayudado a empresas de diversos sectores a alcanzar sus
            objetivos tecnológicos. Conoce sus experiencias trabajando con
            nosotros.
          </p>
        </motion.div>

        {/* Carrusel de testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mb-20'
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className='pb-12'
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className='bg-black/80 backdrop-blur-sm border border-teal-400 rounded-xl p-6 h-full flex flex-col'>
                  <div className='flex items-center mb-4'>
                    <img
                      src={t.image}
                      alt={t.name}
                      width={60}
                      height={60}
                      className='rounded-full mr-4'
                    />
                    <div>
                      <h4 className='font-semibold'>{t.name}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {t.position}
                      </p>
                    </div>
                  </div>
                  <div className='flex mb-4'>
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${
                          idx < t.rating
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <p className='text-muted-foreground flex-grow'>{t.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Logos de clientes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className='text-xl font-semibold text-center mb-8'>
            Empresas que confían en nosotros
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
            {clients.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className='flex items-center justify-center p-4 bg-black/50 rounded-lg border border-teal-400'
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  width={120}
                  height={60}
                  className='opacity-70 hover:opacity-100 transition-opacity duration-300'
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
