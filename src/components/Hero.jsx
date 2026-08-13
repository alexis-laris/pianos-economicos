import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { MessageCircle } from 'lucide-react'

export default function Hero() {
    const slides = [
        'https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1585337072387-14efaeeb2c98?q=80&w=1200&auto=format&fit=crop',
    ]

    return (
        <section id="inicio" className="bg-[#F4EEDF]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 sm:pt-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#C9973E] mb-4">
                            REPARACIÓN GENERAL &nbsp;·&nbsp; VENTA DE REFACCIONES
                        </p>

                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-[#1F1D1A] mb-6">
                            Reparación y Refacciones para Pianos y Órganos Tubulares
                        </h1>

                        <p className="text-[#5F5B53] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                            Brindamos reparación y mantenimiento especializado para pianos y órganos tubulares,
                            junto con refacciones de calidad para conservar el funcionamiento y sonido de tu instrumento.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#servicios"
                                className="inline-flex justify-center items-center rounded-md bg-[#1F1D1A] text-white px-6 py-3.5 text-sm font-semibold hover:bg-black transition-colors"
                            >
                                Conoce nuestros servicios
                            </a>


                        </div>
                    </div>


                    <div className="flex justify-center lg:justify-end w-full">
                        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop
                                className="w-full h-72 sm:h-96"
                            >
                                {slides.map((src, i) => (
                                    <SwiperSlide key={i}>
                                        <img
                                            src={src}
                                            alt={`Piano y órgano ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>

            <div className="border-t border-dashed border-[#1F1D1A]/30" />
        </section>
    )
}