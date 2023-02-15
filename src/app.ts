import express, { Application } from 'express';
import * as dotenv from 'dotenv';

import bodyParser from 'body-parser';
import { debugServiceMiddleware } from './services/debug.service';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(debugServiceMiddleware);
/**
 * Import routes here
 */
import { default as helloRouter } from './routers/helloRouter';
import pool from './services/db.service';

app.use('/hello', helloRouter);

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
	pool.getConnection((err) => {
		if (!err) {
			console.log('DB connection established');
			return;
		}
		throw err;
	});
});
