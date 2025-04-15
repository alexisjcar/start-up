const Clients = () => {
  return (
    <section id="clients" className="min-h-[90vh] md:min-h-[60vh] flex items-center justify-center bg-[#051622] scroll-mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-[#00FFFF]">
          Nuestros Clientes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="aspect-video border border-[#00FFFF]/20 hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] flex items-center justify-center p-8 group">
            <span className="text-gray-400 group-hover:text-[#00FFFF] transition-colors">Cliente 1</span>
          </div>
          <div className="aspect-video border border-[#00FFFF]/20 hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] flex items-center justify-center p-8 group">
            <span className="text-gray-400 group-hover:text-[#00FFFF] transition-colors">Cliente 2</span>
          </div>
          <div className="aspect-video border border-[#00FFFF]/20 hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] flex items-center justify-center p-8 group">
            <span className="text-gray-400 group-hover:text-[#00FFFF] transition-colors">Cliente 3</span>
          </div>
          <div className="aspect-video border border-[#00FFFF]/20 hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] flex items-center justify-center p-8 group">
            <span className="text-gray-400 group-hover:text-[#00FFFF] transition-colors">Cliente 4</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
