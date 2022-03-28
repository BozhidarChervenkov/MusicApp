import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumsService from '../services/albumsService.js';

const albumTemplate = (album) => html`
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
        <div class="btn-group">
            <a href="/details" id="details">Details</a>
        </div>
    </div>
</div>
`;

const catalogTemplate = (albums = []) => html`
        <!--Catalog-->
        <section id="catalogPage">
            <h1>All Albums</h1>
        
            <!-- Display all records -->
            ${albums.map(album => albumTemplate(album))}
        
            ${albums.length == 0
        ? html`<p>No Albums in Catalog!</p>`
        : nothing}
        
        </section>
`;


export const renderCatalog = (ctx) => {
    albumsService.getAll()
        .then(albums => {
            ctx.render(catalogTemplate(albums));
        })
}