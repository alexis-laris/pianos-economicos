import React from 'react'

export default function About() {
    return (
        <section id="nosotros" className="bg-[#F4EEDF]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <div>
                    <p className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#C9973E] mb-4">
                        SOBRE NOSOTROS
                    </p>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#1F1D1A] mb-6">
                        Más de tres décadas dedicados a los pianos y órganos tubulares
                    </h2>

                    <p className="text-[#5F5B53] text-base sm:text-lg leading-relaxed max-w-xl">
                        Somos una empresa dedicada a la reparación y mantenimiento
                        de pianos y órganos tubulares. También contamos con venta de refacciones,
                        afinación, reparación, para que tu instrumento
                        te acompañe por muchos años.
                    </p>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="text-center lg:text-left">
                        <span className="block font-serif text-[7rem] sm:text-[9rem] lg:text-[11rem] leading-none text-[#C9973E]">
                            30+
                        </span>

                        <div className="mt-2 pl-1">
                            <span className="block text-[#1F1D1A] text-xl sm:text-2xl font-semibold">
                                años de experiencia
                            </span>

                            <span className="block text-[#6B675F] text-sm sm:text-base mt-1">
                                Conservando el sonido de nuestros instrumentos
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}