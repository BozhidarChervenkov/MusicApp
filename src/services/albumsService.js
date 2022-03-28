import * as api from './api.js';
import * as request from './requester.js';

export const getAll = () => request.get(`${api.albums}?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = (id) => request.get(`${api.albums}/${id}`);

export const create = (albumData) => request.post(api.albums, albumData);

export const update = (id, albumData) => request.put(`${api.albums}/${id}`, albumData);