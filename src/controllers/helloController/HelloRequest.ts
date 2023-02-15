import { Request } from 'express';

export interface HelloRequest extends Request {
	body: {
		name: string;
	};
}
