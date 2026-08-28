'use server';

import { Resend } from 'resend';
import { contactFormSchema, ContactFormValues } from '@/lib/schemas';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormValues) {
    const parsed = contactFormSchema.safeParse(data);

    if (!parsed.success) {
        return { success: false, error: 'Datos inválidos.' };
    }

    const { name, email, message } = parsed.data;

    const { error } = await resend.emails.send({
        from: 'Portafolio <onboarding@resend.dev>',
        to: [process.env.CONTACT_EMAIL!],
        replyTo: email,
        subject: `Mensaje de ${name} desde el portafolio`,
        html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
    });

    if (error) {
        console.error('Resend error:', error);
        return { success: false, error: 'Error al enviar el mensaje. Intenta de nuevo.' };
    }

    return { success: true };
}
