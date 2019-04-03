const articuloActions = require('./articleActions');
const ticketActions = require('./ticketActions');

module.exports = {
    ...articuloActions,
    ...ticketActions
}