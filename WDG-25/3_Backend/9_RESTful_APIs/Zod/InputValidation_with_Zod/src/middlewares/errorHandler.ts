import { type ErrorRequestHandler } from 'express';
import { join } from 'path';
import { mkdir, appendFile } from 'fs/promises';

const errorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  // if (process.env.NODE_ENV === 'development') {
  //   res.status(err.cause || 500).json({
  //     message: err.message,
  //     stack: err.stack
  //   });
  // } else {
  //   console.log(err.stack);
  //   res.status(err.cause || 500).json({
  //     message: err.message
  //   });
  // }
  //

  // ordner erstellen
  // ort bestimmen
  // dateinamen
  // dateinhalt
  //
  try {
    const logDir = join(process.cwd(), 'log');
    await mkdir(logDir, { recursive: true });

    // dateinamen
    // yyyy-mm-dd-error.log
    //
    const dateString = new Date().toISOString().split('T')[0];
    console.log(dateString);

    const logFilePath = join(logDir, `${dateString}-error.log`);

    // entry

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] - ${req.method} ${req.url} - Error: ${err.message} - Stack: ${err.stack}i \n`;

    await appendFile(logFilePath, logEntry, 'utf-8');

    if (process.env.NODE_ENV === 'development') {
      res.status(err.cause || 500).json({
        message: err.message,
        stack: err.stack
      });
    } else {
      console.log(err.stack);
      res.status(err.cause || 500).json({
        message: err.message
      });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
};

export default errorHandler;
