import backgroundImage from '../../assets/background9.webp'

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-[#00FFFF] mb-6 drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">
            Tu web a medida
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Transformando ideas en soluciones digitales innovadoras
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero