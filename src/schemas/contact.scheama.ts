import { z } from 'zod'

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export type ContactForm = z.infer<typeof ContactSchema>;