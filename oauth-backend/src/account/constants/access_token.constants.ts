import * as config from 'config';

export const accessTokenJwtConstants = {
  secret: config.get('access_token.secret'),
  expiresIn: config.get('access_token.expires'),
  issuer: config.get('access_token.issuer'),
};
