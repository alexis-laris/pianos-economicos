import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    const whatsappLink =
        'https://wa.me/524491080748?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20reparaci%C3%B3n%20y%20refacciones%20para%20pianos%20y%20%C3%B3rganos'

    return (
        <footer className="bg-[#1F1D1A]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">

                    <div>
                        <a href="#inicio" className="flex items-center gap-3 mb-4">
                            <span className="w-9 h-9 rounded-full bg-[#C9973E] flex items-center justify-center shrink-0">
                                <svg width="20" height="20" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 16 C14 13.8 15.8 12 18 12 L46 12 C48.2 12 50 13.8 50 16 L50 30 L14 30 Z" fill="#1C1A17" />
                                    <path d="M14 24 L50 24" stroke="#C9973E" strokeWidth="1.4" opacity="0.4" />
                                    <rect x="14" y="30" width="36" height="20" rx="2" fill="#FBF7EE" />
                                    <g stroke="#1C1A17" strokeWidth="1" opacity="0.55">
                                        <line x1="19.14" y1="30" x2="19.14" y2="50" />
                                        <line x1="24.29" y1="30" x2="24.29" y2="50" />
                                        <line x1="29.43" y1="30" x2="29.43" y2="50" />
                                        <line x1="34.57" y1="30" x2="34.57" y2="50" />
                                        <line x1="39.71" y1="30" x2="39.71" y2="50" />
                                        <line x1="44.86" y1="30" x2="44.86" y2="50" />
                                    </g>
                                    <g fill="#1C1A17">
                                        <rect x="17.6" y="30" width="3.1" height="12" rx="0.6" />
                                        <rect x="22.75" y="30" width="3.1" height="12" rx="0.6" />
                                        <rect x="33.05" y="30" width="3.1" height="12" rx="0.6" />
                                        <rect x="38.2" y="30" width="3.1" height="12" rx="0.6" />
                                        <rect x="43.35" y="30" width="3.1" height="12" rx="0.6" />
                                    </g>
                                    <rect x="14" y="50" width="36" height="3.4" rx="1" fill="#1C1A17" />
                                </svg>
                            </span>
                            <span className="font-serif text-lg text-white whitespace-nowrap">
                                Pianos &amp;{' '}
                                <span className="text-[#C9973E] italic">Órganos Tubulares</span>
                            </span>
                        </a>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Reparación, mantenimiento y refacciones de calidad para que tu instrumento
                            suene como el primer día.
                        </p>
                    </div>

                    <div>
                        <p className="text-[#C9973E] text-xs tracking-[0.2em] font-semibold mb-4">
                            NAVEGACIÓN
                        </p>
                        <nav className="flex flex-col gap-3 text-sm text-white/70">
                            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
                            <a href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a>
                            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
                            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
                        </nav>
                    </div>

                    <div>
                        <p className="text-[#C9973E] text-xs tracking-[0.2em] font-semibold mb-4">
                            CONTACTO
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-2"
                        >
                            <FaWhatsapp size={16} className="text-[#C9973E]" />
                            449 108 0748
                        </a>
                        <p className="text-sm text-white/70 mb-5">
                            Lunes a sábado, 9:00 a.m. – 7:00 p.m.
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=100063756810889"
                                target="_blank"
                                aria-label="Facebook"
                                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#1C1A17] hover:bg-[#C9973E] hover:border-[#C9973E] transition-colors"
                            >
                                <FaFacebook size={16} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <p className="text-white/50 text-xs">
                        © {new Date().getFullYear()} Pianos &amp; Órganos Tubulares. Todos los derechos reservados.
                    </p>
                    <p className="text-white/40 text-xs">
                        Hecho con dedicación en Aguascalientes, México.
                    </p>
                </div>
            </div>
        </footer>
    )
}