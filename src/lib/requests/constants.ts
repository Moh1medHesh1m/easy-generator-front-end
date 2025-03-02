import axios from 'axios';

import { config } from '../../utils/config';

export const apiClient = axios.create({ baseURL :"https://easy-generator-api.onrender.com/api" });
