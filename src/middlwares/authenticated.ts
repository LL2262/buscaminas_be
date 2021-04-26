import { Request, Response, NextFunction } from 'express';
import jwt from 'jwt-simple';
import moment from 'moment'
import { secret_token } from '../common/config';

export const authenticated = async (req: Request, res: Response, next: NextFunction) => {

    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'El token no es valido' });
    }

    var token = req.headers.authorization.split(" ")[1];
    try {
        var payload = jwt.decode(token, secret_token);
        if (payload.iat <= moment().unix()) {
            return res.status(401).json({ message: 'El token a expirado' });
        }
    } catch (ex) {
        return res.status(401).json({ message: 'El token no es valido' });
    }

    req.body.user = payload;

    next();
}