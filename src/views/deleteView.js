import * as albumsService from '../services/albumsService.js';

export const renderDeleteAlbum = (ctx) => {
    const albumId = ctx.params.albumId;

    albumsService.getOne(albumId)
        .then(album => {
            // Checking if the car which the user wants to edit is his creation:
            if (album._ownerId != ctx.user._id) {
                ctx.page.redirect(`/catalog`);

                throw 'The album you want to delete is not yours!';
            }

            return albumsService.del(albumId);
        })
        .then(() => ctx.page.redirect('/catalog'));
}