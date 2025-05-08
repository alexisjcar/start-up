'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import {
  MessageSquare,
  X,
  Send,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className='bg-background border border-teal-400 rounded-lg shadow-lg p-4 mb-4 w-[300px]'
          >
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-semibold'>Contáctanos</h3>
              <Button
                variant='ghost'
                size='icon'
                className='h-7 w-7'
                onClick={() => setIsOpen(false)}
              >
                <X className='h-4 w-4' />
              </Button>
            </div>

            <div className='space-y-3 mb-4'>
              <a
                href='https://wa.me/5491112345678'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center p-2 hover:bg-muted rounded-md transition-colors'
              >
                <div className='bg-green-500/10 text-green-500 p-2 rounded-md mr-3'>
                  <MessageCircle className='h-5 w-5' />
                </div>
                <div>
                  <div className='font-medium'>WhatsApp</div>
                  <div className='text-xs text-muted-foreground'>
                    Respuesta inmediata
                  </div>
                </div>
              </a>

              <a
                href='tel:+5491112345678'
                className='flex items-center p-2 hover:bg-muted rounded-md transition-colors'
              >
                <div className='bg-blue-500/10 text-blue-500 p-2 rounded-md mr-3'>
                  <Phone className='h-5 w-5' />
                </div>
                <div>
                  <div className='font-medium'>Teléfono</div>
                  <div className='text-xs text-muted-foreground'>
                    +54 9 11 1234-5678
                  </div>
                </div>
              </a>

              <a
                href='mailto:info@stigma.com'
                className='flex items-center p-2 hover:bg-muted rounded-md transition-colors'
              >
                <div className='bg-amber-500/10 text-amber-500 p-2 rounded-md mr-3'>
                  <Mail className='h-5 w-5' />
                </div>
                <div>
                  <div className='font-medium'>Email</div>
                  <div className='text-xs text-muted-foreground'>
                    info@stigma.com
                  </div>
                </div>
              </a>
            </div>

            <div className='flex space-x-2'>
              <input
                type='text'
                placeholder='Escribe tu mensaje...'
                className='flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
              />
              <Button size='sm' className='h-9 w-9 p-0'>
                <Send className='h-4 w-4' />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size='icon'
        className='h-14 w-14 rounded-full shadow-lg'
      >
        {isOpen ? (
          <X className='h-6 w-6' />
        ) : (
          <MessageSquare className='h-6 w-6' />
        )}
      </Button>
    </div>
  );
}
