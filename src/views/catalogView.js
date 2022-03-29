import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumsService from '../services/albumsService.js';

const albumTemplate = (album, user) => html`
<div class="card-box">
    <img src="${album.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${user != undefined 
        ? html`<div class="btn-group">
               <a href="/details/${album._id}" id="details">Details</a>
               </div>`
        : nothing
        }
    </div>
</div>
`;

const catalogTemplate = (albums = [], user) => html`
        <!--Catalog-->
        <section id="catalogPage">
            <h1>All Albums</h1>
        
            <!-- Display all records -->
            ${albums.map(album => albumTemplate(album, user))}
        
            ${albums.length == 0
        ? html`<p>No Albums in Catalog!</p>`
        : nothing}
        
        </section>
`;


export const renderCatalog = (ctx) => {
    let user = ctx.user;

    albumsService.getAll()
        .then(albums => {
            ctx.render(catalogTemplate(albums, user));
        })
}