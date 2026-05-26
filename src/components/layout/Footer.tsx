export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-[#1C1A17]/8 bg-[#F3EFEA]/80 py-16 px-4 md:px-8 backdrop-blur-md overflow-hidden text-left">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left Side: Creative Credits & Telemetry */}
        <div className="flex flex-col gap-2 max-w-md">
          <p className="text-xs text-[#6B6661] tracking-wider font-light">
            &copy; {currentYear} Mauricio Gavilán. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-[#6B6661]/70 leading-relaxed font-light font-mono">
            // Diseñado bajo los estándares de arquitectura hexagonal y diseño editorial contemporáneo.
          </p>
        </div>

        {/* Right Side: Editorial Quick Navigation Links */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {[
            { href: '#home', label: 'Inicio' },
            { href: '#about', label: 'Sobre Mí' },
            { href: '#stack', label: 'Stack' },
            { href: '#projects', label: 'Proyectos' },
            { href: '#experience', label: 'Trayectoria' },
            { href: '#contact', label: 'Contacto' },
          ].map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="group relative text-[9px] uppercase font-bold text-[#6B6661] hover:text-[#C2410C] transition-colors duration-300 tracking-wider pb-1"
            >
              <span>{link.label}</span>
              {/* Sliding underline on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C2410C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
