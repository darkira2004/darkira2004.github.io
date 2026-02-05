export default function ProfilePhoto() {
  return (
    <div 
      id="spline-card-tour"
      className="flex justify-center items-center py-8 md:py-12"
    >
      <div className="relative group">
        {/* Efecto de brillo sutil en el fondo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>
        
        {/* Contenedor de la foto */}
        <div className="relative">
          <img
            src="/assets/img/fotoRicardo.png"
            alt="Ricardo Villegas"
            className="
              w-64 md:w-80 lg:w-96
              h-auto
              rounded object-cover
              border-2 border-slate-700/30
              shadow-xl
              transition-transform duration-300
              group-hover:scale-[1.01]
            "
            loading="eager"
          />
          
          {/* Borde animado opcional */}
          <div className="absolute inset-0 rounded border border-emerald-400/10 group-hover:border-emerald-400/20 transition-colors duration-300"></div>
        </div>
      </div>
    </div>
  );
}
