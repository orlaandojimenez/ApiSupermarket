const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    subtotal: {
		type: Number,
		required: true
	},
	iva: {
		type: Number,
		required: true
	},
	total: {
		type: Number,
		required: true
	},
	is_active: {
		type: Boolean,
		default: true
	},
  articles: [{type: Schema.Types.ObjectId, ref: "Article", required: true }],
});


module.exports = mongoose.model('Ticket',ticketSchema);