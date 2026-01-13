# WBS Travel Journal API

Starter code for authentication/authorization module at WBS Coding School

## Setup

- Fork repo
- Clone into your computer
- `cd` into working directory
- `npm i` to install dependencies
- create a `.env.development.local` file with variables:
  - `MONGO_URI` set to a valid MongoDB connection string.
  - `PORT` ONLY in case you want to override the default `8000`

## Commands

- `npm run dev`: Starts development server, pulling environment variables from `.env.development.local` file
- `npm start`: Starts production server, pulling environment variables from the system

## Usage

- The code is organised as follows:

```
wbs-ts-travel-journal-api/
|- controllers/ => Our controller functions per resource
|- db/
|   \_ index.js => Database connection with Mongoose
|- middlewares/ => custom middlewares
|- models/ => Our models per resource
|- routes/ => Our routers per resource
|- schemas/
|   \_ schemas.js => Zod schemas for data validations
|- types/ => For additional types
\_ index.js
```
