const Tecnologies = () => {
  return (
    <section id="technologies" className="min-h-[90vh] md:min-h-[60vh] flex items-center justify-center bg-[#051622] scroll-mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-[#00FFFF]">
          Tecnologías
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
          <div className="aspect-square border-2 border-[#00FFFF]/20 rounded-full hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] flex items-center justify-center p-6 group">
            <span className="text-gray-400 group-hover:text-[#00FFFF] transition-colors text-lg">Logo 1</span>
          </div>
          <div className="aspect-square border-2 border-[#00FFFF]/20 rounded-full hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] flex items-center justify-center p-6 group">
            <span className="text-gray-400 group-hover:text-[#00FFFF] transition-colors text-lg">Logo 2</span>
          </div>
          <div className="aspect-square border-2 border-[#00FFFF]/20 rounded-full hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] flex items-center justify-center p-6 group">
            <span className="text-gray-400 group-hover:text-[#00FFFF] transition-colors text-lg">Logo 3</span>
          </div>
          <div className="aspect-square border-2 border-[#00FFFF]/20 rounded-full hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] flex items-center justify-center p-6 group">
            <span className="text-gray-400 group-hover:text-[#00FFFF] transition-colors text-lg">Logo 4</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tecnologies
