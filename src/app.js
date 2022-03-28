import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import page from '../node_modules/page/page.mjs';

import { renderLogin } from './views/loginView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', () => console.log('home'));
page('/login', renderLogin);
page('/catalog', () => console.log('catalog'));
page('/search', () => console.log('search'));
page('/register', () => console.log('register'));
page('/logout', () => console.log('logout'));


page.start();