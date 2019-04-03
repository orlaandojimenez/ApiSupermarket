const express = require("express");

const { getArticulos, getArticulo, updateArticulo, deleteArticulo, newArticulo} = require("../controllers/article");

const {getTickets, getTicket, updateTicket, deleteTicket, newTicket, getTotal} = require("../controllers/ticket");

const router = express.Router();

//Articles
router.get("/articulos", getArticulos);
router.get("/articulos/:id", getArticulo);
router.patch("/articulos/:id", updateArticulo);
router.delete("/articulos/:id", deleteArticulo);
router.post("/articulos/create",newArticulo);

//Tikets
router.get("/tickets", getTickets);
router.get("/tickets/:id", getTicket);
router.patch("/tickets/:id", updateTicket);
router.delete("/tickets/:id", deleteTicket);
router.post("/tickets/create",newTicket);
router.get("/tickets/total/:id",getTotal);

module.exports = router;
