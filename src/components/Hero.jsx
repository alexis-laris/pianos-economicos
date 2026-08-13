import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/effect-fade'

import img1 from '../assets/imgs/img-1.jpg'
import img2 from '../assets/imgs/img-2.jpg'
import img3 from '../assets/imgs/img-3.jpg'

export default function Hero() {
    const slides = [
        {
            image: img1,
            alt: 'Reparación de pianos en Aguascalientes',
        },
        {
            image: img2,
            alt: 'Órgano tubular',
        },
        {
            image: img3,
            alt: 'Mantenimiento y restauración de pianos',
        },
    ]

    return (
        <section
            id="inicio"
            className="relative h-[calc(100vh-80px)] min-h-162.5 overflow-hidden bg-[#1F1D1A]"
        >
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                loop
                className="absolute! inset-0! h-full! w-full!"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className="h-full! w-full!"
                    >
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="block h-full w-full object-cover object-center"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="pointer-events-none absolute inset-0 z-10 bg-black/45" />

            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-black/75 via-black/40 to-black/10" />

            <div className="relative z-20 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="max-w-3xl">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#C9973E]" />

                            <p className="text-xs font-semibold tracking-[0.25em] text-[#D9B66F] sm:text-sm">
                                REPARACIÓN · MANTENIMIENTO · REFACCIONES
                            </p>
                        </div>

                        <h1 className="mb-6 font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-7xl">
                            Reparación de Pianos
                            <br />
                            <span className="text-[#D9B66F]">
                                y Órganos Tubulares
                            </span>
                        </h1>

                        <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                            Brindamos reparación y mantenimiento especializado
                            para pianos y órganos tubulares, junto con
                            refacciones de calidad para conservar el
                            funcionamiento, sonido y vida útil de tu instrumento.
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#contacto"
                                className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#C9973E] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B58732]"
                            >
                                <FaWhatsapp size={18} />

                                Solicitar información

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="#servicios"
                                className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#1F1D1A]"
                            >
                                Ver nuestros servicios
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/15 bg-black/30 backdrop-blur-md">
                <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/15">
                    <div className="flex items-center gap-2 px-3 py-3 sm:px-8 sm:py-4">
                        <p className="text-[10px] tracking-widest text-[#D9B66F] sm:text-xs">
                            01
                        </p>
                        <p className="text-xs font-medium text-white sm:text-sm">
                            Reparación
                        </p>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-3 sm:px-8 sm:py-4">
                        <p className="text-[10px] tracking-widest text-[#D9B66F] sm:text-xs">
                            02
                        </p>
                        <p className="text-xs font-medium text-white sm:text-sm">
                            Mantenimiento
                        </p>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-3 sm:px-8 sm:py-4">
                        <p className="text-[10px] tracking-widest text-[#D9B66F] sm:text-xs">
                            03
                        </p>
                        <p className="text-xs font-medium text-white sm:text-sm">
                            Refacciones
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}