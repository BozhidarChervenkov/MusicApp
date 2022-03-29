import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import page from '../node_modules/page/page.mjs';

import { renderLogin } from './views/loginView.js';
import { renderLogout } from './views/logoutView.js';
import { renderRegister } from './views/registerView.js';
import { renderHome } from './views/homeView.js';
import { renderCatalog } from './views/catalogView.js';
import { renderAlbumDetails } from './views/detailsView.js';
import { renderEditAlbum } from './views/editView.js';
import { renderCreateAlbum } from './views/createView.js';
import { renderDeleteAlbum } from './views/deleteView.js';
import { renderSearch } from './views/searchView.js';

// Middlewares are executed with every page instance:
page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

// Page routes are configured here:
page('/', renderHome);
page('/login', renderLogin);
page('/logout', renderLogout);
page('/register', renderRegister);
page('/catalog', renderCatalog);
page('/create-album', renderCreateAlbum);
page('/delete/:albumId', renderDeleteAlbum);
page('/details/:albumId', renderAlbumDetails);
page('/edit/:albumId', renderEditAlbum);
page('/search', renderSearch);

page.start();