import { Router } from 'express';
import auth from './auth';
import user from './user';
import punctuations from './punctuations';


const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/punctuations', punctuations);

export default routes;