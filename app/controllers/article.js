const { getAllArticulos, getArticuloById, updateArticuloById, deleteArticuloById, createArticulo } = require("../actions");

const getArticulos = (req, res) => {
	getAllArticulos().then((articles) => {
		res.status(200).json(articles);
	}).catch((e) => {
		res.status(400).json(e);
	});
};

const getArticulo = (req, res) => {
	getArticuloById(req.params.id).then((article) => {
		if (!article) res.status(404).json({ "message": "Articulo does not exist" });
		res.status(200).json(article);
	}).catch((e) => {
		res.status(400).json(e);
	});
};

const updateArticulo = (req, res) => {
	updateArticuloById(req.params.id, req.body).then((article) => {
		if (!article) res.status(404).json({ "message": "Article does not exist" });
		res.status(200).json(article);
	}).catch((e) => {
		res.status(400).json(e);
	});
};

const deleteArticulo = (req, res) => {
	deleteArticuloById(req.params.id).then((article) => {
		if (!article) res.status(404).json({ "message": "Article does not exist" });
		res.status(200).json({ "message": "Article deleted seccessfully" });
	}).catch((e) => {
		res.status(400).json(e);
	});
};

const newArticulo = (req, res) => {

	createArticulo(req.body).then(
		article => res.status(201).json({ "message": "Article has been creted"})
	).catch(e => {
		console.log(e)
		res.status(400).send(e)
	});


};

module.exports = {
	getArticulos,
	getArticulo,
	updateArticulo,
    deleteArticulo,
    newArticulo
};
