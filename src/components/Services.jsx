import React from 'react'
import { Wrench, Music2, Settings, Package, PenTool } from 'lucide-react'

export default function Services() {
    return (
        <section id="servicios" className="bg-[#EFE7D6]">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-24">

                <div className="text-center">
                    <p className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#C9973E] mb-4">
                        LO QUE HACEMOS
                    </p>

                    <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1D1A] mb-3">
                        Nuestros Servicios
                    </h2>

                    <p className="text-[#6B675F] text-base sm:text-lg mb-12">
                        Especialistas en pianos y órganos tubulares, desde su mantenimiento hasta su reparación.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">


                    <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5">
                            <Music2 size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2">
                            Mantenimiento y afinación
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Afinación, limpieza y mantenimiento para conservar el buen funcionamiento
                            y sonido de tu piano u órgano tubular.
                        </p>
                    </div>


                    <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5">
                            <Wrench size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2">
                            Reparación general
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Diagnóstico y reparación de mecanismos, teclas, componentes,
                            estructura y demás elementos del instrumento.
                        </p>
                    </div>


                    <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5">
                            <Settings size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2">
                            Reparación de órganos tubulares
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Mantenimiento, reparación y restauración de órganos tubulares,
                            cuidando cada uno de sus componentes.
                        </p>
                    </div>


                    <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5">
                            <Package size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2">
                            Venta de refacciones
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Refacciones y componentes para pianos y órganos tubulares,
                            seleccionados para cada necesidad de reparación.
                        </p>
                    </div>


                    <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5">
                            <PenTool size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2">
                            Fabricación a la medida
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Fabricación y adaptación de piezas y componentes especiales
                            para las necesidades de cada instrumento.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}