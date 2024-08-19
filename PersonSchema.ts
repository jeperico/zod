import { z } from 'zod';

const PersonSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, "Very short name").max(50, "Very long name"),
  email: z.string().email("Email need to be valid").min(5, "Very short email").max(50, "Very long email"),
  age: z.number().int().positive().min(18, "Age must be 18 or older"),
});

type Person = z.infer<typeof PersonSchema>;

const result = PersonSchema.safeParse({
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  age: 30,
});

if (result.success) {
  const person: Person = result.data;
  console.log(person.email);
}

console.log(result);
