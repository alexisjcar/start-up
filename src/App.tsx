import { Routes, Route } from 'react-router-dom';
import useSmoothScroll from './common/hooks/useSmoothScroll';

import Hero from './common/components/Hero';
import AboutUs from './domain/about/AboutUs';
import Services from './domain/offeredServices/Services';
import Technologies from './domain/technologies/Technologies';
import Clients from './domain/clients/Clients';
import Process from './domain/process/Process';
import CTA from './domain/cta/CTA';
import Header from './common/layout/Header';
import Footer from './common/layout/Footer';
import Contact from './domain/contact/Contact';
import FloatingContact from './common/components/FloatingContact';
// import WhatsAppButton from './common/components/WhatsAppButton';

export default function App() {
  useSmoothScroll();

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <AboutUs />
              <Services />
              <Process />
              <Technologies />
              <Clients />
              <CTA />
              <Contact />
            </>
          }
        />

        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/process' element={<Process />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/cta' element={<CTA />} />
        <Route path='/contact' element={<Contact />} />

        {/* Ruta comodín para 404 (opcional) */}
        <Route
          path='*'
          element={<h1 className='p-8 text-center'>Página no encontrada</h1>}
        />
      </Routes>
      <Footer />
      <FloatingContact />
    </div>
  );
}
