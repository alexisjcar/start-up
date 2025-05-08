'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../../common/components/ui/Button';
import { Input } from '../../common/components/ui/Input';
import { Textarea } from '../../common/components/ui/Textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../common/components/ui/Select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../common/components/ui/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es demasiado corto' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(6, { message: 'Teléfono inválido' }),
  service: z.string().min(1, { message: 'Selecciona un servicio' }),
  message: z.string().min(10, { message: 'El mensaje es demasiado corto' }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
    }, 1500);
  }

  return (
    <section id='contact' className='pt-2 pb-20 scroll-mt-20'>
      <div className='container px-4 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className='max-w-4xl mx-auto text-center mb-8'
        >
          <span className='inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4'>
            Contacto
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            ¿Tienes un <span className='text-primary'>proyecto</span> en mente?
          </h2>
          <p className='text-lg text-muted-foreground'>
            Estamos aquí para ayudarte. Contáctanos y te responderemos a la
            brevedad para discutir cómo podemos colaborar.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-black/80 backdrop-blur-sm border border-teal-400 rounded-xl p-6 lg:p-8'
          >
            {isSubmitted ? (
              <div className='h-full flex flex-col items-center justify-center text-center p-8'>
                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
                  <Send className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-4'>¡Mensaje enviado!</h3>
                <p className='text-muted-foreground mb-6'>
                  Gracias por contactarnos. Nos pondremos en contacto contigo lo
                  antes posible.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
                >
                  <div className='grid sm:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder='Tu nombre' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder='tu@email.com' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className='grid sm:grid-cols-2 gap-6'>
                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='+54 9 11 1234-5678'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='service'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Servicio de interés</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Selecciona un servicio' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value='web'>
                                Desarrollo Web
                              </SelectItem>
                              <SelectItem value='mobile'>
                                Aplicaciones Móviles
                              </SelectItem>
                              <SelectItem value='custom'>
                                Software a Medida
                              </SelectItem>
                              <SelectItem value='ecommerce'>
                                E-Commerce
                              </SelectItem>
                              <SelectItem value='consulting'>
                                Consultoría IT
                              </SelectItem>
                              <SelectItem value='cloud'>
                                Cloud & DevOps
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder='Cuéntanos sobre tu proyecto...'
                            className='min-h-[120px]'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    className='w-full'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex flex-col justify-between'
          >
            <div className='bg-black/80 backdrop-blur-sm border border-teal-400 rounded-xl p-6 lg:p-8 mb-8'>
              <h3 className='text-2xl font-bold mb-6'>
                Información de contacto
              </h3>

              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='bg-primary/10 p-3 rounded-lg mr-4'>
                    <Mail className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-medium mb-1'>Email</h4>
                    <a
                      href='mailto:info@stigma.com'
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      info@stigma.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-primary/10 p-3 rounded-lg mr-4'>
                    <Phone className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-medium mb-1'>Teléfono</h4>
                    <a
                      href='tel:+5491112345678'
                      className='text-muted-foreground hover:text-primary transition-colors'
                    >
                      +54 9 11 1234-5678
                    </a>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='bg-primary/10 p-3 rounded-lg mr-4'>
                    <MapPin className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h4 className='font-medium mb-1'>Ubicación</h4>
                    <p className='text-muted-foreground'>
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-black/80 backdrop-blur-sm border border-teal-400 rounded-xl p-6 lg:p-8'>
              <h3 className='text-xl font-bold mb-4'>Horario de atención</h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='text-muted-foreground'>Lunes - Viernes</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-muted-foreground'>Sábados</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-muted-foreground'>Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
