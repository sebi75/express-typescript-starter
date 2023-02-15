import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

import { ErrorsEnum, StatusCodesEnum } from '../types';
import { logger } from '../utils/logger';

export const genericValidationMiddleware =
	(zodSchema: AnyZodObject) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await zodSchema.parseAsync(req.body);
			return next();
		} catch (error: any) {
			logger.error(`Validation error: ${error}`);
			return res.status(StatusCodesEnum.BAD_REQUEST).send({
				error: ErrorsEnum.VALIDATION_ERROR,
				message: error,
			});
		}
	};
