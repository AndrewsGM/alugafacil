import { Header } from '@/components/layout/header';
import { Hero } from '@/components/home/hero';
import { SearchSection } from '@/components/home/search-section';
import { FeaturesSection } from '@/components/home/features-section';
import { HowItWorks } from '@/components/home/how-it-works';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <SearchSection />
            <FeaturesSection />
            <HowItWorks />
            <Footer />
        </main>
    );
}
