import * as authService from '../services/authService.js';

export function renderLogout(ctx){
    authService.logout()
    .finally(()=> {
        ctx.page.redirect('/');
    });
}