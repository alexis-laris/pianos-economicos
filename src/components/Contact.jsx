import React from 'react'
import { MessageCircle, Phone, Clock } from 'lucide-react'

export default function Contact() {
    const whatsappLink =
        'https://wa.me/524491080748?text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20pianos%20y%20%C3%B3rganos'

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

                    <div className="bg-[#1F1D1A] rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
                        <div>
                            <span className="w-12 h-12 rounded-full bg-[#C9973E] flex items-center justify-center mb-6">
                                <MessageCircle size={22} className="text-[#1C1A17]" />
                            </span>
                            <h3 className="font-serif text-2xl text-white mb-3">
                                Chatea con nosotros ahora
                            </h3>
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                                Respondemos rápido de lunes a sábado. Cuéntanos qué refacción
                                buscas o qué servicio necesitas.
                            </p>
                        </div>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center gap-2 rounded-md bg-[#C9973E] text-[#1C1A17] px-6 py-3.5 text-sm font-semibold hover:bg-[#B9873A] transition-colors w-full sm:w-auto"
                        >
                            <MessageCircle size={18} />
                            Escríbenos por WhatsApp
                        </a>
                    </div>


                    <div className="flex flex-col gap-6 h-full">
                        <div className="bg-white rounded-2xl p-8 flex-1 flex flex-col justify-center gap-4 shadow-sm">
                            <span className="w-12 h-12 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E]">
                                <Phone size={22} />
                            </span>
                            <div>
                                <p className="font-semibold text-[#1F1D1A] text-lg mb-1">Teléfono / WhatsApp</p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#6B675F] text-base hover:text-[#C9973E] transition-colors"
                                >
                                    449 108 0748
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 flex-1 flex flex-col justify-center gap-4 shadow-sm">
                            <span className="w-12 h-12 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E]">
                                <Clock size={22} />
                            </span>
                            <div>
                                <p className="font-semibold text-[#1F1D1A] text-lg mb-1">Horario de atención</p>
                                <p className="text-[#6B675F] text-base">Lunes a sábado, 9:00 a.m. – 7:00 p.m.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}