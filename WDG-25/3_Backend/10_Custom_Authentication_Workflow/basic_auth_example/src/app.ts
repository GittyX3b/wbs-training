import express from 'express';
import '#db';
import { createPost } from '#controllers';
import { errorHandler, isAuthenticated } from '#middlewares';
import { register, login, logout } from '#controllers';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json(), cookieParser());

app.post('/register', register);

app.post('/login', login);

app.delete('/logout', logout);

app.post('/posts', isAuthenticated, createPost);

app.use('*splat', (req, res) => {
	res.status(404).send('Not found');
});

app.use(errorHandler);

app.listen(port, () =>
	console.log(`Server is listenting on http://localhost:${port}`)
);
