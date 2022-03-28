import * as api from './api.js';
import * as request from './requester.js';

const USER_KEY = 'user';

export const login = (email, password) => {
    return request.post(api.login, { email, password })
        .then(user => {
            saveUser(user);

            return user;
        })
};

export const register = (email, password) => {
    return request.post(api.register, { email, password })
        .then(user => {
            saveUser(user);

            return user;
        })
};

export const logout = () => {
    return request.get(api.logout)
        .finally(destroySession);
};

function destroySession() {
    localStorage.removeItem(USER_KEY);
}

function saveUser(data) {
    localStorage.setItem(USER_KEY, JSON.stringify(data));
};

export function getUser() {
    try {
        let user = localStorage.getItem(USER_KEY);

        if (user) {
            return JSON.parse(user);
        }
    } catch (error) {
        return undefined;
    }
};