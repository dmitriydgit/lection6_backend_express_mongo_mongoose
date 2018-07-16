var mongoose = require('mongoose');

var filmFavouriteSchema = mongoose.Schema({
	_id: Number,
	user: String,
	favorite: Boolean
});

var FilmFavoritModel = mongoose.model('FilmFavorite', filmFavouriteSchema);

module.exports = FilmFavoritModel; 