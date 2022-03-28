import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import page from '../node_modules/page/page.mjs';

import { renderLogin } from './views/loginView.js';
import { renderLogout } from './views/logoutView.js';
import { renderRegister } from './views/registerView.js';
import { renderHome } from './views/homeView.js';
import { renderCatalog } from './views/catalogView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', renderHome);
page('/login', renderLogin);
page('/logout', renderLogout);
page('/register', renderRegister);
page('/catalog', renderCatalog);
page('/search', () => console.log('search'));

page.start();