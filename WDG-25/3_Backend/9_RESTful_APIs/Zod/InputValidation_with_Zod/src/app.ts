import express, { type RequestHandler } from 'express';
import { postRouter, userRouter } from '#routes';
import '#db';
import { errorHandler, logger } from '#middlewares';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.use('*splat', (req, res) => {
  throw new Error('Not found', { cause: 404 });
});

app.use(errorHandler);

app.listen(port, () => console.log(`\x1b[34mMain app listening at http://localhost:${port}\x1b[0m`));
