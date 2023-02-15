import express, { Response } from 'express';
import { HelloRequest } from './HelloRequest';

export const helloController = (req: HelloRequest, res: Response) => {
	res.send('Hello world!');
};
