import { z } from "zod";

export const formSchema = z.object({
    name: z.string()
        .min(2, "Minimum 2 characters")
        .max(12, "Maximum 12 characters")
        .regex(/^[a-zA-Z]+$/, "Only letters allowed"),
    lastName: z.string()
        .min(2, "Minimum 2 characters")
        .max(12, "Maximum 12 characters")
        .regex(/^[a-zA-Z]+$/, "Only letters allowed"),
    selectedPokemons: z.array(
        z.object({ value: z.string(), label: z.string() }))
        .min(4, "You must select 4 Pokémons")
        .max(4, "You can only select 4 Pokémons"),
  });
  