import { z } from 'zod';

const PersonSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
});

const result = PersonSchema.safeParse({
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  age: 30,
});

console.log(result);
