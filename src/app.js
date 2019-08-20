import express from 'express';
import bodyParser from 'body-parser';
import validator from 'express-validator';
import consign from 'consign';
import helmet from 'helmet';
import cors from 'cors';

import db from './configs/db';
import services from './services';
import initialize from './utils/cluster';

export const setup = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(validator());
  app.use(helmet());
  app.use(cors({}));

  db();

  consign()
    .include('src/services')
    .into(app);

  services(app);

  app.listen(process.env.PORT || 4000, () => null);

  return app;
}

// Parallel processes
initialize(setup);
