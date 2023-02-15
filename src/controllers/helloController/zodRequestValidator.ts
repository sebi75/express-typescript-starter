import { z } from 'zod';

export const zodRequestValidator = z.object({
	name: z.string(),
});
