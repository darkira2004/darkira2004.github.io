export default function ProfilePhoto() {
  return (
    <div 
      id="spline-card-tour"
      className="flex justify-center items-center py-8 md:py-12"
    >
      <div className="relative group">
        <img
          src="/assets/img/fotoRicardo.png"
          alt="Ricardo Villegas"
          className="
            w-64 md:w-80 lg:w-96
            h-auto
            rounded object-cover
            border border-white/20
            shadow-xl
            transition-transform duration-300
            group-hover:scale-[1.01]
          "
          loading="eager"
        />
      </div>
    </div>
  );
}
