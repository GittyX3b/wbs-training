import "#db";
import express from "express";
import { userRouter, postRouter, productRouter } from "#routers";
import { errorHandler, logger } from "#middleware";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

/* Rückgabe einer statischen HTML-Datei ===  */
// app.use('/main', express.static('./public'));

/* application level middleware === === === */
app.use(logger);

// app.get('/error-from-sync', (req, res) => {
//   throw new Error('Throwing openly in sync code');
// });

// app.get('/error-from-async', async (req, res) => {
//   throw new Error('throwing openly in async code');
// });

/* Routing === === === === === === === === */
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/products", productRouter);

app.use("/error", (req, res) => {
  throw new Error("Error message requested", { cause: 418 });
});

app.use("*splat", (req, res) => {
  throw new Error("Not found", { cause: 404 });
});

/* ErrorHandling middleware zuletzt === ===  */
app.use(errorHandler);

app.listen(port, () =>
  console.log(`\x1b[34mMain app listening at http://localhost:${port}\x1b[0m`)
);
