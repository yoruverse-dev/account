import { z } from 'zod';

export const env = z.object({
    APPLICATION_URL: z.string().url(),
}).parse(process.env);