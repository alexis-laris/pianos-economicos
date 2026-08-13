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

                    <div className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm h-full flex flex-col items-center text-center border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#C9973E]/40 hover:shadow-xl hover:shadow-[#C9973E]/10">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5 mx-auto transition-all duration-300 group-hover:bg-[#C9973E] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                            <Music2 size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2 transition-colors duration-300 group-hover:text-[#B08332]">
                            Mantenimiento y afinación
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Afinación, limpieza y mantenimiento para conservar el buen funcionamiento
                            y sonido de tu piano u órgano tubular.
                        </p>

                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#C9973E] transition-all duration-300 group-hover:w-16 -translate-x-1/2" />
                    </div>

                    <div className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm h-full flex flex-col items-center text-center border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#C9973E]/40 hover:shadow-xl hover:shadow-[#C9973E]/10">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5 mx-auto transition-all duration-300 group-hover:bg-[#C9973E] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                            <Wrench size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2 transition-colors duration-300 group-hover:text-[#B08332]">
                            Reparación general
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Diagnóstico y reparación de mecanismos, teclas, componentes,
                            estructura y demás elementos del instrumento.
                        </p>

                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#C9973E] transition-all duration-300 group-hover:w-16 -translate-x-1/2" />
                    </div>

                    <div className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm h-full flex flex-col items-center text-center border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#C9973E]/40 hover:shadow-xl hover:shadow-[#C9973E]/10">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5 mx-auto transition-all duration-300 group-hover:bg-[#C9973E] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                            <Settings size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2 transition-colors duration-300 group-hover:text-[#B08332]">
                            Reparación de órganos tubulares
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Mantenimiento, reparación y restauración de órganos tubulares,
                            cuidando cada uno de sus componentes.
                        </p>

                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#C9973E] transition-all duration-300 group-hover:w-16 -translate-x-1/2" />
                    </div>

                    <div className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm h-full flex flex-col items-center text-center border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#C9973E]/40 hover:shadow-xl hover:shadow-[#C9973E]/10">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5 mx-auto transition-all duration-300 group-hover:bg-[#C9973E] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                            <Package size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2 transition-colors duration-300 group-hover:text-[#B08332]">
                            Venta de refacciones
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Refacciones y componentes para pianos y órganos tubulares,
                            seleccionados para cada necesidad de reparación.
                        </p>

                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#C9973E] transition-all duration-300 group-hover:w-16 -translate-x-1/2" />
                    </div>

                    <div className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-sm h-full flex flex-col items-center text-center border border-transparent cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#C9973E]/40 hover:shadow-xl hover:shadow-[#C9973E]/10">
                        <div className="w-10 h-10 rounded-lg bg-[#F4EEDF] flex items-center justify-center text-[#C9973E] mb-5 mx-auto transition-all duration-300 group-hover:bg-[#C9973E] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                            <PenTool size={20} />
                        </div>

                        <h3 className="font-serif text-lg text-[#1F1D1A] mb-2 transition-colors duration-300 group-hover:text-[#B08332]">
                            Fabricación a la medida
                        </h3>

                        <p className="text-sm text-[#6B675F] leading-relaxed">
                            Fabricación y adaptación de piezas y componentes especiales
                            para las necesidades de cada instrumento.
                        </p>

                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#C9973E] transition-all duration-300 group-hover:w-16 -translate-x-1/2" />
                    </div>

                </div>
            </div>
        </section>
    )
}