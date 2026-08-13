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
                        <span className="w-9 h-9 rounded-full bg-[#1C1A17] flex items-center justify-center text-[#C9973E] text-lg font-serif">
                            ♫
                        </span>

                        <span className="font-serif text-lg sm:text-xl text-[#201E1B] whitespace-nowrap">
                            Pianos &amp;{' '}
                            <span className="text-[#C9973E] italic">
                                Órganos Tobulares
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
                        className="hidden lg:inline-flex items-center gap-2 rounded-md bg-[#C9973E] px-5 py-2.5 text-sm font-semibold text-[#1C1A17] hover:bg-[#B9873A] transition-colors"
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