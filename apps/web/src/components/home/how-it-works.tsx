'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Car, Search, Key } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        number: '01',
        icon: UserPlus,
        title: 'Crie sua conta',
        description:
            'Cadastre-se gratuitamente e complete seu perfil com seus dados e documentos.',
    },
    {
        number: '02',
        icon: Search,
        title: 'Busque veículos',
        description:
            'Use nossa busca inteligente para encontrar o veículo perfeito perto de você.',
    },
    {
        number: '03',
        icon: Key,
        title: 'Reserve com segurança',
        description:
            'Todos os veículos são verificados. Reserve com confiança e tranquilidade.',
    },
    {
        number: '04',
        icon: Car,
        title: 'Aproveite sua viagem',
        description:
            'Retire o veículo, aproveite sua experiência e devolva no prazo combinado.',
    },
];

export function HowItWorks() {
    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-2xl text-center space-y-4 mb-12">
                    <h2 className="font-heading text-3xl font-bold md:text-4xl">
                        Como funciona?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Em apenas 4 passos simples você pode alugar ou anunciar seu veículo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <Card key={step.number} className="relative overflow-hidden group hover:shadow-lg transition-all">
                                {/* Number Badge */}
                                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                                    {step.number}
                                </div>

                                <CardHeader className="relative z-10">
                                    <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="text-base">
                                        {step.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" asChild>
                        <Link href="/register">Começar Agora</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
