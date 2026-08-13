import React from 'react'

export default function About() {
    return (
        <section id="nosotros" className="bg-[#F4EEDF]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <div className="group">
                    <p className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#C9973E] mb-4 transition-all duration-300 group-hover:tracking-[0.3em]">
                        SOBRE NOSOTROS
                    </p>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#1F1D1A] mb-6 transition-transform duration-500 group-hover:translate-x-1">
                        Más de tres décadas dedicados a los pianos y órganos tubulares
                    </h2>

                    <p className="text-[#5F5B53] text-base sm:text-lg leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-[#3F3B35]">
                        Somos una empresa dedicada a la reparación y mantenimiento
                        de pianos y órganos tubulares. También contamos con venta de refacciones,
                        afinación, reparación, para que tu instrumento
                        te acompañe por muchos años.
                    </p>

                    <div className="mt-7 w-0 h-0.5 bg-[#C9973E] transition-all duration-500 group-hover:w-20" />
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="group relative text-center lg:text-left cursor-default">
                        <div className="absolute -inset-8 rounded-full bg-[#C9973E]/5 scale-75 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />

                        <span className="relative block font-serif text-[7rem] sm:text-[9rem] lg:text-[11rem] leading-none text-[#C9973E] transition-all duration-500 group-hover:scale-105 group-hover:text-[#B08332]">
                            30+
                        </span>

                        <div className="relative mt-2 pl-1">
                            <span className="block text-[#1F1D1A] text-xl sm:text-2xl font-semibold transition-transform duration-300 group-hover:translate-x-1">
                                años de experiencia
                            </span>

                            <span className="block text-[#6B675F] text-sm sm:text-base mt-1 transition-colors duration-300 group-hover:text-[#4F4B45]">
                                Conservando el sonido de nuestros instrumentos
                            </span>
                        </div>

                        <div className="relative mt-5 h-0.5 w-10 bg-[#C9973E] mx-auto lg:mx-0 transition-all duration-500 group-hover:w-20" />
                    </div>
                </div>

            </div>
        </section>
    )
}