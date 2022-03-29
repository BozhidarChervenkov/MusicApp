import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumsService from '../services/albumsService.js';

let albumTemplate = (album, user) => html`
<div class="card-box">
    <img src="./images/BrandiCarlile.png">
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

const searchTemplate = (albums = [], onSearch, user) => html`
        <!--Search Page-->
        <section id="searchPage">
            <h1>Search by Name</h1>
        
            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" @click=${onSearch}>Search</button>
            </div>
        
            <h2>Results:</h2>
        
            <!--Show after click Search button-->
            <div class="search-result">
                <!-- If there is such albums, render them: -->
                ${albums.length > 0
                ? albums.map(album => albumTemplate(album, user))
                : html`<p class="no-albums">No results.</p>`
                }
            </div>
        </section>
`;


export const renderSearch = (ctx) => {
    let user = ctx.user;

    const onSearch = () => {
        let name = document.getElementById('search-input').value;

        if(name == ''){
            alert('Input cannot be null!');
            return;
        }

        albumsService.getByName(name)
            .then(albums => {
                ctx.render(searchTemplate(albums, onSearch, user));
            });
    };

    ctx.render(searchTemplate([], onSearch));
}