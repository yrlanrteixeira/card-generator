import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  phone: z.string().min(10, 'Telefone deve ter no mínimo 10 dígitos'),
  email: z.string().email('E-mail inválido'),
});

export type FormData = z.infer<typeof formSchema>;