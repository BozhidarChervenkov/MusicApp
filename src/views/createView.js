import { html } from '../../node_modules/lit-html/lit-html.js';
import * as albumsService from '../services/albumsService.js';

const createTemplate = (onSubmit) => html`
        <!--Create Page-->
        <section class="createPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Add Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" placeholder="Album name">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" placeholder="Price">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" placeholder="Description"></textarea>

                        <button class="add-album" type="submit">Add New Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`;

export const renderCreateAlbum = (ctx) => {
    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let imgUrl = formData.get('imgUrl');
        let price = formData.get('price');
        let releaseDate = formData.get('releaseDate');
        let artist = formData.get('artist');
        let genre = formData.get('genre');
        let description = formData.get('description');

        let albumData = {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        };

        // Check if fields are empty, if they are don't create the car
        if (name == '' || imgUrl == '' || price == '' || releaseDate == '' || artist == '' || genre == ''  || description == '') {
            alert('All input fields must be filled!')
            return;
        }

        albumsService.create(albumData)
            .then(() => {
                ctx.page.redirect('/catalog');
            });
    }
    ctx.render(createTemplate(onSubmit));
}