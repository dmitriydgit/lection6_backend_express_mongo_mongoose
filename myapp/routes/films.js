var express = require('express');
var router = express.Router();
var FilmFavoritModel = require('./../models/film.favourites.model');
var FilmBookmarkModel = require('./../models/film.bookmarks.model');

/* GET home page. */
router.get('/favorites', function (req, res) {

	var query = { _id: { $in: req.query.filmIds.split(',') } };
	FilmFavoritModel.find(query, function (err, favorites) {
		if (err) throw err;

		res.send(favorites);
	})
}).post('/favorites', function (req, res) {
	//console.log(req)
	var favorite = new FilmFavoritModel({
		_id: req.body.filmId,
		user: req.body.user,
		favorite: true
	})
	favorite.save(function (err) {
		if (err) throw err;
		res.send(favorite);
	});
}).delete('/:id/favorites', function (req, res) {
	var query = { _id: req.params.id }
	FilmFavoritModel.deleteOne(query, function (err) {
		if (err) throw err;
	})
	res.send({ _id: req.params.id });
});


router.get('/bookmarks', function (req, res) {
	var query = { _id: { $in: req.query.filmIds.split(',') } };
	FilmBookmarkModel.find(query, function (err, bookmarks) {
		if (err) throw err;
		res.send(bookmarks);
	})
}).post('/bookmarks', function (req, res) {
	var bookmark = new FilmBookmarkModel({
		_id: req.body.filmId,
		user: req.body.user,
		bookmark: true
	})
	bookmark.save(function (err) {
		if (err) throw err;
		res.send(bookmark);
	});
}).delete('/:id/bookmarks', function (req, res) {
	var query = { _id: req.params.id }
	FilmBookmarkModel.deleteOne(query, function (err) {
		if (err) throw err;
	})
	res.send({ _id: req.params.id });
});

module.exports = router;