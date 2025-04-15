import { FiInstagram, FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="min-h-[90vh] md:min-h-[60vh] flex items-center justify-center bg-[#051622] scroll-mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-[#00FFFF]">
          Contáctanos
        </h2>
        <div className="w-full max-w-xl mx-auto">
          <form className="space-y-6 mb-8">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-[#00FFFF] mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full bg-[#051622] text-gray-200 rounded-none border-2 border-[#00FFFF]/20 p-3 
                focus:border-[#00FFFF] focus:ring-[#00FFFF]/20 focus:ring-2 transition-all duration-300
                hover:border-[#00FFFF]/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#00FFFF] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full bg-[#051622] text-gray-200 rounded-none border-2 border-[#00FFFF]/20 p-3 
                focus:border-[#00FFFF] focus:ring-[#00FFFF]/20 focus:ring-2 transition-all duration-300
                hover:border-[#00FFFF]/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-[#00FFFF] mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full bg-[#051622] text-gray-200 rounded-none border-2 border-[#00FFFF]/20 p-3 
                focus:border-[#00FFFF] focus:ring-[#00FFFF]/20 focus:ring-2 transition-all duration-300
                hover:border-[#00FFFF]/50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full border-2 border-[#00FFFF] bg-transparent text-[#00FFFF] py-3 px-6 text-lg
              hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
          
          <div className="flex flex-col items-center">
            <div className="flex gap-6 items-center">
              <a
                href="https://instagram.com/tuempresa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border-2 border-[#00FFFF]/20 text-[#00FFFF] 
                hover:border-[#00FFFF] hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] 
                transition-all duration-300 rounded-full group"
              >
                <FiInstagram className="w-7 h-7 group-hover:scale-110 transform transition-transform" />
              </a>
              <a
                href="mailto:contacto@tuempresa.com"
                className="w-14 h-14 flex items-center justify-center border-2 border-[#00FFFF]/20 text-[#00FFFF] 
                hover:border-[#00FFFF] hover:bg-[#00FFFF]/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] 
                transition-all duration-300 rounded-full group"
              >
                <FiMail className="w-7 h-7 group-hover:scale-110 transform transition-transform" />
              </a>
            </div>
            <div className="mt-3 text-gray-400 text-center">
              <p>Síguenos en redes sociales o contáctanos directamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
