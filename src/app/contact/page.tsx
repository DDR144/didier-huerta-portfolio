import { ContactForm } from '@/components/contact/ContactForm';
import { Heading } from '@/components/common/Heading';
import { Section } from '@/components/common/Section';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Contacto | Didier Huerta',
    description: 'Contáctame para trabajo freelance o oportunidades laborales.',
});

export default function ContactPage() {
    return (
        <Section>
            <div className="max-w-2xl mx-auto text-center mb-12">
                <Heading as="h1">Contacto</Heading>
                <p className="text-xl text-muted-foreground">
                    Actualmente estoy disponible para trabajo freelance y posiciones a tiempo completo.
                </p>
            </div>
            <ContactForm />
        </Section>
    );
}
