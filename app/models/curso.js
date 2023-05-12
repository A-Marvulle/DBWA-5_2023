var mongoose = require('mongoose');
module.exports = function() {
    var schema = mongoose.Schema({
        nome: {type: String, required: true},
        coordenador: { type: String, required: true, index: { unique: true } }
    });
     return mongoose.model('Curso', schema);
};
