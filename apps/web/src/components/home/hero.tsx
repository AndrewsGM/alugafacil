'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-20 md:pt-24 md:pb-28">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="container">
                <div className="mx-auto max-w-3xl text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium shadow-sm">
                            <span className="mr-2">🚗</span>
                            <span>Plataforma de Mobilidade como Serviço</span>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                    >
                        Alugue ou anuncie seu{' '}
                        <span className="text-primary">carro com segurança</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground md:text-xl"
                    >
                        A primeira plataforma de locação peer-to-peer de veículos com validação de
                        conformidade veicular. Confiança, segurança e compliance em cada locação.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" asChild>
                            <Link href="/search">
                                <Search className="mr-2 h-5 w-5" />
                                Buscar Veículos
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/register">
                                Anunciar Meu Carro
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-3 gap-8 pt-8"
                    >
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-primary">1000+</p>
                            <p className="text-sm text-muted-foreground">Veículos Disponíveis</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-primary">5000+</p>
                            <p className="text-sm text-muted-foreground">Usuários Ativos</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-primary">99.9%</p>
                            <p className="text-sm text-muted-foreground">Satisfação</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
