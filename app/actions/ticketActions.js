const Ticket = require('../models/Tickets');

const createTicket = async(data)=>{
    return Ticket.create(data);
};
const getTicketById = (id) => {
	return Ticket.findOne({_id:id,is_active:true}).populate('articles');
};

const getAllTickets = () => {
	return Ticket.find({is_active:true}).populate('articles');
};

const updateTicketById = (id,data) =>{
	return Ticket.findByIdAndUpdate(id,{$set:data},{new:true});
};

const deleteTicketById =  (id)  => {
	return Ticket.findByIdAndUpdate({_id:id,is_active:true},{$set:{is_active:false}},{new:true});
};

const calculateTotal = (id) => {
    let subtotal = 0;
    let iva = 1.16;
    let total = 0;
    getTicketById(id)
        .then(ticket => {
            ticket.articles.map(article => {
                subtotal += article.precio;
            })
            const newTotal = {
                subtotal: subtotal,
                iva: iva,
                total:subtotal * iva}
            console.log(newTotal)
            updateTicketById(id, newTotal)
            .then(ticketCalculado => {return (ticketCalculado)})
            .catch(err => console.log(err))
        })
        .catch(err => res.status(400).send(err))
}

module.exports = {
	createTicket,
	getTicketById,
	getAllTickets,
	updateTicketById,
    deleteTicketById,
    calculateTotal
};
