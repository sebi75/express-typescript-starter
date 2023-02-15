import express from 'express';

import { genericValidationMiddleware } from '../utils/requestValidationMiddleware';
/**
 * Import controllers here
 */
import {
	helloController,
	zodRequestValidator as helloReqValidator,
} from '../controllers/helloController';

const helloRouter = express.Router();

helloRouter.get(
	'/',
	genericValidationMiddleware(helloReqValidator),
	helloController
);

export default helloRouter;
