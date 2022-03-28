import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

const registerTemplate = (onSubmit) => html`
        <!--Registration-->
        <section id="registerPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Register</legend>
        
                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">
        
                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">
        
                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">
        
                    <button type="submit" class="register">Register</button>
        
                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
`;

export function renderRegister(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPass = formData.get('conf-pass');

        authService.register(email, password, repeatPass)
            .then(() => {
                ctx.page.redirect('/');
            });
    }

    ctx.render(registerTemplate(onSubmit));
}