import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import videoRoutes from './routes/videos.routes';

/* Creating an instance of the express application. */
const app = express();

/* A middleware that allows us to see the requests that are being made to the server. */
app.use(morgan("dev"));

/* A middleware that allows us to make requests from a different domain. */
app.use(cors());
/* A middleware that allows us to parse the body of the request. */
app.use(express.json());
/* A middleware that allows us to parse the body of the request. */
app.use(express.urlencoded({extended:false}));

/* Importing the routes from the `videoRoutes` file. */
app.use(videoRoutes);

export default app;