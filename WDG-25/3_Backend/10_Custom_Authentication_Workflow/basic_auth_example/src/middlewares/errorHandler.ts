import { type ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = async (
	err,
	req,
	res,
	next
) => {
	if (process.env.NODE_ENV === 'development') {
		res.status(err.cause || 500).json({
			message: err.message,
			stack: err.stack,
		});
	} else {
		console.log(err.stack);
		res.status(err.cause || 500).json({
			message: err.message,
		});
	}
};
