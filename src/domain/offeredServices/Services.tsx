const Services = () => {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center bg-gray-50 scroll-mt-20 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Servicio 1</h3>
            <p className="text-gray-600">Descripción del servicio...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Servicio 2</h3>
            <p className="text-gray-600">Descripción del servicio...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Servicio 3</h3>
            <p className="text-gray-600">Descripción del servicio...</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
