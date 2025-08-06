import { motion } from 'motion/react';
import { Outlet } from 'react-router';

export default function Footer() {
    return (
        <>
        <main>
            <Outlet />
        </main>
            <footer className="relative w-full bg-black overflow-hidden border-t border-[#72C0FF]/10">
                {/* Gradiente decorativo */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0984E9] to-[#72C0FF]"></div>
                </div>

                {/* Conteúdo do Footer */}
                <div className="relative z-10 container mx-auto px-5 md:px-20 py-12">
                    {/* Texto inspiracional */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BFE2FF] mb-3">
                            Transforme Sua Experiência
                        </h2>
                        <p className="text-[#BFE2FF]/80 max-w-2xl mx-auto">
                            Pronto para levar sua interação ao próximo nível? Estou aqui para ajudar.
                        </p>
                    </motion.div>

                    {/* Grid de conteúdo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Navegação */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center md:items-start"
                        >
                            <h3 className="text-lg font-medium text-center text-white mb-4">Navegação</h3>
                            <ul className="space-y-2 text-center sm:text-start">
                                {['Inicio', 'Sobre', 'Começar'].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-[#BFE2FF] hover:text-white transition-colors duration-200">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contatos */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-center md:items-end"
                        >
                            <h3 className="text-lg font-medium text-white mb-4">Contato</h3>
                            <ul className="space-y-2 text-[#BFE2FF] text-center md:text-right">
                                <li><a href="mailto:almondesaugusto@gmail.com" className="hover:text-white transition-colors">almondesaugusto@gmail.com</a></li>
                                <li><a href="tel:+5589988083671" className="hover:text-white transition-colors">(89) 98808-3671</a></li>
                                <li><a href="https://linkedin.com/in/augusto-almondes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="https://github.com/AugustoAlmondes" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                                <li><a href="https://augusto-almondes.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Desenvolvedor</a></li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="pt-6 border-t border-[#72C0FF]/10 text-center"
                    >
                        <p className="text-[#BFE2FF]/60 text-sm">
                            © {new Date().getFullYear()} Augusto Almondes. Todos os direitos reservados.
                        </p>
                    </motion.div>
                </div>
            </footer>
        </>
    );
}