import { ContactForm } from '@/components/contact/ContactForm';
import { Heading } from '@/components/common/Heading';
import { Section } from '@/components/common/Section';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Contact | Didier Portfolio',
    description: 'Get in touch with me for freelance work or job opportunities.',
});

export default function ContactPage() {
    return (
        <Section>
            <div className="max-w-2xl mx-auto text-center mb-12">
                <Heading as="h1">Contact</Heading>
                <p className="text-xl text-muted-foreground">
                    I'm currently available for freelance work and full-time positions.
                </p>
            </div>
            <ContactForm />
        </Section>
    );
}
