import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const whatsappLink =
        'https://wa.me/524491080748?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20reparaci%C3%B3n%20y%20refacciones%20para%20pianos%20y%20%C3%B3rganos'

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    const links = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#nosotros', label: 'Sobre Nosotros' },
        { href: '#servicios', label: 'Servicios' },
        { href: '#contacto', label: 'Contacto' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full">

            <div className="relative z-60 bg-[#F4EEDF] border-b border-black/5">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-20 flex items-center justify-between">

                    <a href="#inicio" className="flex items-center gap-3 shrink-0">
                        <span className="w-9 h-9 rounded-full bg-[#1C1A17] flex items-center justify-center shrink-0">
                            <svg width="20" height="20" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 16 C14 13.8 15.8 12 18 12 L46 12 C48.2 12 50 13.8 50 16 L50 30 L14 30 Z" fill="#C9973E" />
                                <path d="M14 24 L50 24" stroke="#1C1A17" strokeWidth="1.4" opacity="0.35" />
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
                                <rect x="14" y="50" width="36" height="3.4" rx="1" fill="#C9973E" />
                            </svg>
                        </span>

                        <span className="font-serif text-lg sm:text-xl text-[#201E1B] whitespace-nowrap">
                            Pianos &amp;{' '}
                            <span className="text-[#C9973E] italic">
                                Órganos Tubulares
                            </span>
                        </span>
                    </a>

                    <nav className="hidden lg:flex items-center gap-10 text-sm text-[#2B2A28] font-medium">
                        {links.map((l) => (
                            <a key={l.href} href={l.href} className="hover:text-[#C9973E] transition-colors">
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:inline-flex items-center gap-2 rounded-md bg-[#C9973E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#B9873A] transition-colors"
                    >
                        <FaWhatsapp size={18} />
                        Escríbenos por WhatsApp
                    </a>

                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden p-2 -mr-2 text-[#201E1B] relative z-70"
                        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            <div
                className={`lg:hidden fixed inset-0 z-40 bg-[#1F1D1A] transition-all duration-500 ease-out
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <nav className="h-full w-full flex flex-col items-center justify-center gap-8">
                    {links.map((l, i) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            style={{ transitionDelay: open ? `${i * 75}ms` : '0ms' }}
                            className={`font-serif text-3xl text-white hover:text-[#C9973E] transition-all duration-500 ease-out
                ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        style={{ transitionDelay: open ? `${links.length * 75}ms` : '0ms' }}
                        className={`mt-4 inline-flex items-center gap-2 rounded-md bg-[#C9973E] px-6 py-3.5 text-sm font-semibold text-[#1C1A17] hover:bg-[#B9873A] transition-all duration-500 ease-out
              ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                    >
                        <FaWhatsapp size={20} />
                        Escríbenos por WhatsApp
                    </a>
                </nav>
            </div>
        </header>
    )
}