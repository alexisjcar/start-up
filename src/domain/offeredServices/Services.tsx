const Services = () => {
  return (
    <section id="services" className="min-h-[90vh] md:min-h-[60vh] flex items-center justify-center bg-[#051622] scroll-mt-12 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-[#00FFFF]">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#051622] p-8 rounded-none border border-[#00FFFF]/20 hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] group">
            <h3 className="text-2xl font-semibold mb-4 text-[#00FFFF] group-hover:text-white transition-colors">
              Servicio 1
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
              Descripción del servicio...
            </p>
          </div>
          <div className="bg-[#051622] p-8 rounded-none border border-[#00FFFF]/20 hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] group">
            <h3 className="text-2xl font-semibold mb-4 text-[#00FFFF] group-hover:text-white transition-colors">
              Servicio 2
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
              Descripción del servicio...
            </p>
          </div>
          <div className="bg-[#051622] p-8 rounded-none border border-[#00FFFF]/20 hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] group">
            <h3 className="text-2xl font-semibold mb-4 text-[#00FFFF] group-hover:text-white transition-colors">
              Servicio 3
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
              Descripción del servicio...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
