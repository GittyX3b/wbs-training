import cors from 'cors';
import express from 'express';
import '#db';
import { authenticate, errorHandler, isAdmin } from '#middlewares';
import { postsRouter } from '#routes';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: '*' }));
app.use(express.json(), cookieParser());

app.get('/admin', authenticate, isAdmin, (req, res) => {
  res.send('you are an admin');
});

app.use('/posts', postsRouter);
app.use('/*splat', (_req, res) => {
  res.status(404).json({ error: 'Not found' });
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
