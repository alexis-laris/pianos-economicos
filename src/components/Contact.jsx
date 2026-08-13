import React from 'react'
import { Phone, Clock } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
    const whatsappLink =
        'https://wa.me/524491080748?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20reparaci%C3%B3n%20y%20refacciones%20para%20pianos%20y%20%C3%B3rganos'

    return (
        <section id="contacto" className="bg-[#F4EEDF]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-24">

                <div className="text-center mb-12">
                    <p className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#C9973E] mb-4">
                        CONTACTO
                    </p>

                    <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1D1A] mb-3">
                        Escríbenos, con gusto te atendemos
                    </h2>

                    <p className="text-[#6B675F] text-base sm:text-lg max-w-xl mx-auto">
                        La forma más rápida de cotizar, agendar mantenimiento o resolver dudas
                        es a través de WhatsApp.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    <div className="group bg-[#1F1D1A] rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center border border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-[#C9973E]/30 hover:shadow-2xl hover:shadow-[#1F1D1A]/20">

                        <div className="flex flex-col items-center">
                            <span className="w-12 h-12 rounded-full bg-[#C9973E] flex items-center justify-center mb-5 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#D8AB55]">
                                <FaWhatsapp size={24} className="text-[#1C1A17]" />
                            </span>

                            <h3 className="font-serif text-2xl text-white mb-3 transition-colors duration-300 group-hover:text-[#C9973E]">
                                Chatea con nosotros ahora
                            </h3>

                            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
                                Respondemos rápido de lunes a sábado.
                            </p>

                            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-7">
                                Cuéntanos qué refacción buscas o qué servicio necesitas.
                            </p>
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/button inline-flex justify-center items-center gap-2 rounded-md bg-[#C9973E] text-white px-6 py-3.5 text-sm font-semibold hover:bg-[#B9873A] transition-all duration-300 w-full sm:w-auto hover:scale-[1.03] hover:shadow-lg hover:shadow-[#C9973E]/20"
                        >
                            <FaWhatsapp
                                size={20}
                                className="transition-transform duration-300 group-hover/button:scale-110"
                            />
                            Escríbenos por WhatsApp
                        </a>

                    </div>

                    <div className="flex flex-col gap-6 h-full">

                        <div className="group bg-white rounded-2xl p-8 flex-1 flex flex-col items-center justify-center gap-4 text-center shadow-sm border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#C9973E]/30 hover:shadow-lg hover:shadow-[#C9973E]/10">
                            <span className="w-12 h-12 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mx-auto transition-all duration-300 group-hover:bg-[#C9973E] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                                <Phone size={22} />
                            </span>

                            <div>
                                <p className="font-semibold text-[#1F1D1A] text-lg mb-1 transition-colors duration-300 group-hover:text-[#B08332]">
                                    Teléfono / WhatsApp
                                </p>

                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#6B675F] text-base hover:text-[#C9973E] transition-colors"
                                >
                                    449 108 0748
                                </a>
                            </div>

                            <div className="w-0 h-0.5 bg-[#C9973E] transition-all duration-300 group-hover:w-12" />
                        </div>

                        <div className="group bg-white rounded-2xl p-8 flex-1 flex flex-col items-center justify-center gap-4 text-center shadow-sm border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#C9973E]/30 hover:shadow-lg hover:shadow-[#C9973E]/10">
                            <span className="w-12 h-12 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mx-auto transition-all duration-300 group-hover:bg-[#C9973E] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                                <Clock size={22} />
                            </span>

                            <div>
                                <p className="font-semibold text-[#1F1D1A] text-lg mb-1 transition-colors duration-300 group-hover:text-[#B08332]">
                                    Horario de atención
                                </p>

                                <p className="text-[#6B675F] text-base">
                                    Lunes a sábado, 9:00 a.m. – 7:00 p.m.
                                </p>
                            </div>

                            <div className="w-0 h-0.5 bg-[#C9973E] transition-all duration-300 group-hover:w-12" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}