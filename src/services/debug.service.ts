import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const debugServiceMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	logger.info(
		`Request received: ${req.method} ${req.path} ${JSON.stringify(req.body)}`
	);

	next();
};
