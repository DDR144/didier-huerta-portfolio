'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { contactFormSchema, ContactFormValues } from '@/lib/schemas';
import { sendContactEmail } from '@/app/contact/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true);
        setError(null);

        const result = await sendContactEmail(data);

        setIsSubmitting(false);

        if (result.success) {
            setIsSuccess(true);
            form.reset();
        } else {
            setError(result.error ?? 'Error al enviar el mensaje. Intenta de nuevo.');
        }
    }

    if (isSuccess) {
        return (
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>¡Mensaje Enviado!</CardTitle>
                    <CardDescription>
                        Gracias por contactarme. Te responderé lo antes posible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={() => setIsSuccess(false)} className="w-full">
                        Enviar otro mensaje
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Ponte en contacto</CardTitle>
                <CardDescription>
                    ¿Tienes un proyecto en mente o simplemente quieres saludar? Completa el formulario a continuación.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {error && (
                            <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>
                        )}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Juan Pérez" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo electrónico</FormLabel>
                                    <FormControl>
                                        <Input placeholder="juan@ejemplo.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mensaje</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Cuéntame sobre tu proyecto..."
                                            className="resize-none min-h-[120px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                'Enviar Mensaje'
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
