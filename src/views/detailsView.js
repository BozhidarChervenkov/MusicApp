import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumsService from '../services/albumsService.js';

const detailsAlbumTemlate = (album, user) => html`
        <!--Details Page-->
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src="${album.imgUrl}">
                </div>
                <div class="albumInfo">
                    <div class="albumText">
        
                        <h1>Name: ${album.name}</h1>
                        <h3>Artist: ${album.artist}</h3>
                        <h4>Genre: ${album.genre}</h4>
                        <h4>Price: $${album.price}</h4>
                        <h4>Date: ${album.releaseDate}</h4>
                        <p>${album.description}</p>
                    </div>
        
                    <!-- Only for registered user and creator of the album-->
                    ${user._id == album._ownerId
                    ? html`<div class="actionBtn">
                        <a href="/edit/${album._id}" class="edit">Edit</a>
                        <a href="/delete/${album._id}" class="remove">Delete</a>
                    </div>`
                    : nothing
                }
        
                </div>
            </div>
        </section>
`;

export const renderAlbumDetails = (ctx) => {
    let user = ctx.user;

    albumsService.getOne(ctx.params.albumId) // ctx.params.carId gets the carId from the URL!
        .then(album => {
            ctx.render(detailsAlbumTemlate(album, user));
        })
};