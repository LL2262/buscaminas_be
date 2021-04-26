import jwt from 'jwt-simple'
import moment from 'moment'
import { User } from "../entity/User";
import { secret_token } from '../common/config';

export default class Jwt{

    static createToken = (usuario: User) => {
        let user: User;
        user = usuario;

        let payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            lastName: user.lastName,
            iat: moment().add(1, 'hour').unix(),
            //iat: moment().unix(),
            //exp: moment().add(1, 'minutes').unix()
        };
    
        return jwt.encode(payload, secret_token, 'HS512');
    }
}
