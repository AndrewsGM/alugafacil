import Link from 'next/link';
import { Car, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Car className="h-6 w-6 text-primary" />
                            <span className="font-heading text-xl font-bold">Aluga Fácil</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            A plataforma mais confiável de locação peer-to-peer de veículos no Brasil.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Produto */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Produto</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/search" className="hover:text-primary transition-colors">
                                    Buscar Veículos
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-it-works" className="hover:text-primary transition-colors">
                                    Como Funciona
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-primary transition-colors">
                                    Planos e Preços
                                </Link>
                            </li>
                            <li>
                                <Link href="/safety" className="hover:text-primary transition-colors">
                                    Segurança
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Empresa</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-primary transition-colors">
                                    Carreiras
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary transition-colors">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Ajuda */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Ajuda</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/faq" className="hover:text-primary transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="hover:text-primary transition-colors">
                                    Suporte
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-primary transition-colors">
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-primary transition-colors">
                                    Privacidade
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Aluga Fácil. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
