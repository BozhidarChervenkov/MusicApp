import * as api from './api.js';
import * as request from './requester.js';

export const getAll = () => request.get(`${api.albums}?sortBy=_createdOn%20desc&distinct=name`);