import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Aluga Fácil - Plataforma de Locação de Veículos',
    description:
        'A plataforma mais confiável de locação peer-to-peer de veículos no Brasil. Alugue ou anuncie seu carro com segurança e compliance veicular.',
    keywords: [
        'aluguel de carros',
        'locação de veículos',
        'p2p',
        'peer-to-peer',
        'carros',
        'mobilidade',
    ],
    authors: [{ name: 'Aluga Fácil' }],
    creator: 'Aluga Fácil',
    publisher: 'Aluga Fácil',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://alugafacil.com.br',
        siteName: 'Aluga Fácil',
        title: 'Aluga Fácil - Plataforma de Locação de Veículos',
        description: 'A plataforma mais confiável de locação peer-to-peer de veículos no Brasil.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Aluga Fácil',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aluga Fácil - Plataforma de Locação de Veículos',
        description: 'A plataforma mais confiável de locação peer-to-peer de veículos no Brasil.',
        images: ['/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
