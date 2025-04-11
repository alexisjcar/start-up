import backgroundImage from '../../assets/background.jpg'

function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Fondo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Tu Start-up de Desarrollo Web</h1>
        <p className="text-xl mb-8">Soluciones tecnológicas a medida para tu negocio</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          Conoce más
        </button>
      </div>
    </div>
  )
}

export default Hero