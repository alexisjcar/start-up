import Header from './common/layout/Header'
import Footer from './common/layout/Footer'
import Hero from './common/components/Hero'
import AboutUs from './domain/about/AboutUs'
import Services from './domain/offeredServices/Services'
import Tecnologies from './domain/tecnologies/Tecnologies'
import Clients from './domain/clients/Clients'
import Contact from './domain/contact/Contact'

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <main className="w-full space-y-2">
        <AboutUs />
        <Services />
        <Clients />
        <Tecnologies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App