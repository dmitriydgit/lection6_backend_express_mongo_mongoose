var mongoose = require('mongoose');

var filmBookmarkSchema = mongoose.Schema({
	_id: Number,
	user: String,
	bookmark: Boolean
});

var FilmBookmarkModel = mongoose.model('FilmBookmark', filmBookmarkSchema);

module.exports = FilmBookmarkModel; 