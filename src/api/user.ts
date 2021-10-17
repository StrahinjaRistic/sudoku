import fetch from './fetch';
import { userRoutes as USER } from './constants';

export const loginUser = async ({ query, params }) => {
  return await fetch({ query, endpoint: USER.LOGIN , params, method = 'POST' })
}