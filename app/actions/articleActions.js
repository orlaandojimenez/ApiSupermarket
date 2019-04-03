const Articulo = require('../models/Articles');

const createArticulo = async(data)=>{
    return Articulo.create(data);
};

const getArticuloByNombre = (nombre)=>{
    return Articulo.findOne({nombre: nombre});
};

const getArticuloById = (id) => {
	return Articulo.findOne({_id:id,is_active:true});
};

const getAllArticulos = () => {
	return Articulo.find({is_active:true});
};

const updateArticuloById = (id,data) =>{
	return Articulo.findByIdAndUpdate(id,{$set:data},{new:true});
};

const deleteArticuloById =  (id)  => {
	return Articulo.findByIdAndUpdate({_id:id,is_active:true},{$set:{is_active:false}},{new:true});
};

module.exports = {
	createArticulo,
	getArticuloByNombre,
	getArticuloById,
	getAllArticulos,
	updateArticuloById,
	deleteArticuloById,
};
