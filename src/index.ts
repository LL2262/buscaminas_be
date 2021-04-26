import {createConnection} from 'typeorm';
import express from 'express';
import cors from 'cors';
import routes from './routes/index'

const PORT = process.env.PORT || 3000;

createConnection().then(async () => {

    // Create express app
    const app = express();
    
    // Middlewares
    app.use(cors());
    app.use(express.json());

    // Routes
    app.use('/api', routes);

    // Start express server
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

}).catch(error => console.log(error));
