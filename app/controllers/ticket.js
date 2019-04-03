const { getAllTickets, getTicketById, updateTicketById, deleteTicketById, createTicket, calculateTotal } = require("../actions");

const getTickets = (req, res) => {
	getAllTickets().then((tickets) => {
		res.status(200).json(tickets);
	}).catch((e) => {
		res.status(400).json(e);
	});
};

const getTicket = (req, res) => {
	getTicketById(req.params.id).then((ticket) => {
		if (!ticket) res.status(404).json({ "message": "Ticket does not exist" });
		res.status(200).json(ticket);
	}).catch((e) => {
		res.status(400).json(e);
	});
};

const updateTicket = (req, res) => {
	updateTicketById(req.params.id, req.body).then((ticket) => {
		if (!ticket) res.status(404).json({ "message": "Ticket does not exist" });
		res.status(200).json(ticket);
	}).catch((e) => {
		res.status(400).json(e);
	});
};

const deleteTicket = (req, res) => {
	deleteTicketById(req.params.id).then((ticket) => {
		if (!ticket) res.status(404).json({ "message": "Ticket does not exist" });
		res.status(200).json({ "message": "Ticket deleted seccessfully" });
	}).catch((e) => {
		res.status(400).json(e);
	});
};

const newTicket = (req, res) => {

	createTicket(req.body).then(
		ticket => res.status(201).json({ "message": "Ticket has been creted"})
	).catch(e => {
		console.log(e)
		res.status(400).send(e)
	});
};

const getTotal = (req,res) => {
    calculateTotal(req.params.id).then(
        ticket => res.status(201).json({ "message": "Ticket has been creted"})
	).catch(e => {
		console.log(e)
		res.status(400).send(e)
	});
};

module.exports = {
	getTickets,
	getTicket,
	updateTicket,
    deleteTicket,
    newTicket,
    getTotal
};
