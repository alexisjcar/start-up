
const Clients = () => {
  return (
    <section id="clients" className="scroll-mt-20 bg-white">
      <div className="section-container">
        <h2 className="text-4xl font-bold mb-12">Nuestros Clientes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          <div className="w-32 h-16 bg-white shadow rounded flex items-center justify-center">
            Cliente 1
          </div>
          <div className="w-32 h-16 bg-white shadow rounded flex items-center justify-center">
            Cliente 2
          </div>
          <div className="w-32 h-16 bg-white shadow rounded flex items-center justify-center">
            Cliente 3
          </div>
          <div className="w-32 h-16 bg-white shadow rounded flex items-center justify-center">
            Cliente 4
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
