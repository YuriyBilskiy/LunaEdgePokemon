import { z } from "zod";
import { formSchema } from "../client/formSchema";

export type FormData = z.infer<typeof formSchema>;
