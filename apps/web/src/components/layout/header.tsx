'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car, Menu, User, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Car className="h-6 w-6 text-primary" />
                    <span className="font-heading text-xl font-bold">Aluga Fácil</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        href="/"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Início
                    </Link>
                    <Link
                        href="/search"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Buscar Veículos
                    </Link>
                    <Link
                        href="/how-it-works"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Como Funciona
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Planos
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" asChild>
                        <Link href="/login">Entrar</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/register">Cadastrar</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="container flex flex-col space-y-4 py-4">
                        <Link
                            href="/"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Início
                        </Link>
                        <Link
                            href="/search"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Buscar Veículos
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Como Funciona
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Planos
                        </Link>
                        <div className="flex flex-col space-y-2 pt-4 border-t">
                            <Button variant="ghost" asChild>
                                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                    Entrar
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                                    Cadastrar
                                </Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
