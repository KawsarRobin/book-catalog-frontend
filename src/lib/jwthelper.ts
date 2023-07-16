import jwt_decode from 'jwt-decode';

export const decodeAccessToken = (accessToken: string) => {
  try {
    const decodedToken = jwt_decode(accessToken);
    return decodedToken;
  } catch (error) {
    console.error('Error decoding access token:', error);
    return null;
  }
};
