const AboutUs = () => {
  return (
    <section id="about" className="min-h-[90vh] md:min-h-[60vh] flex items-center justify-center bg-[#051622] scroll-mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-[#00FFFF]">
          Sobre Nosotros
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Somos una empresa comprometida con la excelencia y la innovación en el desarrollo web.
            Nuestro equipo de expertos está dedicado a crear soluciones digitales que transforman ideas en realidad.
          </p>
          <div className="mt-12 p-8 border border-[#00FFFF]/20 hover:border-[#00FFFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
            <h3 className="text-2xl font-semibold mb-6 text-[#00FFFF]">
              Nuestra Misión
            </h3>
            <p className="text-gray-400">
              Impulsar el éxito de nuestros clientes a través de soluciones tecnológicas innovadoras y de alta calidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
