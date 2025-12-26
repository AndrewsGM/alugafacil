'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, MapPin, Calendar } from 'lucide-react';

export function SearchSection() {
    return (
        <section className="py-12 md:py-16">
            <div className="container">
                <Card className="p-6 md:p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Encontre o veículo perfeito para você
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Location */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                Localização
                            </label>
                            <Input placeholder="Digite sua cidade..." />
                        </div>

                        {/* Date Range */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                Data de Retirada
                            </label>
                            <Input type="date" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                Data de Devolução
                            </label>
                            <Input type="date" />
                        </div>

                        {/* Search Button */}
                        <div className="flex items-end">
                            <Button className="w-full" size="lg">
                                <Search className="mr-2 h-5 w-5" />
                                Buscar
                            </Button>
                        </div>
                    </div>

                    {/* Quick Filters */}
                    <div className="mt-6 pt-6 border-t">
                        <p className="text-sm text-muted-foreground mb-3">Categorias populares:</p>
                        <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">
                                Econômico
                            </Button>
                            <Button variant="outline" size="sm">
                                SUV
                            </Button>
                            <Button variant="outline" size="sm">
                                Sedan
                            </Button>
                            <Button variant="outline" size="sm">
                                Elétrico
                            </Button>
                            <Button variant="outline" size="sm">
                                Luxo
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
