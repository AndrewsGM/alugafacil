'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle, TrendingUp, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Shield,
        title: 'Validação de Conformidade',
        description:
            'Todos os veículos passam por validação automática de placa, chassi e verificação de débitos e pendências policiais.',
        color: 'text-blue-500',
    },
    {
        icon: CheckCircle,
        title: 'Verificação Completa',
        description:
            'Sistema integrado com Detran e bases policiais para garantir que você alugue com segurança e tranquilidade.',
        color: 'text-green-500',
    },
    {
        icon: TrendingUp,
        title: 'Planos Flexíveis',
        description:
            'Do plano gratuito ao elite, escolha o que melhor se adapta às suas necessidades. Escale conforme seu negócio cresce.',
        color: 'text-purple-500',
    },
    {
        icon: Globe,
        title: 'Geolocalização Inteligente',
        description:
            'Encontre veículos próximos a você com nosso algoritmo de busca geoespacial. Economia de tempo e combustível.',
        color: 'text-orange-500',
    },
];

export function FeaturesSection() {
    return (
        <section className="py-16 md:py-24 bg-muted/40">
            <div className="container">
                <div className="mx-auto max-w-2xl text-center space-y-4 mb-12">
                    <h2 className="font-heading text-3xl font-bold md:text-4xl">
                        Por que escolher o <span className="text-primary">Aluga Fácil</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Nossa plataforma oferece o que há de mais moderno em tecnologia e segurança para
                        locação de veículos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <div className={`rounded-lg bg-muted p-3 ${feature.color}`}>
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <CardTitle>{feature.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
