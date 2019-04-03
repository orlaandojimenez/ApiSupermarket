const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    nombre: {
		type: String,
		required: true
	},
	precio: {
		type: Number,
		required: true
	},
	existencias: {
		type: Number,
		required: true
	},
  is_active: {
		type: Boolean,
		default: true
		},
});


module.exports = mongoose.model('Article',articleSchema);