const { Schema, model } =  require('mongoose');
//Create a Schema
const Guild = Schema({
    id: String,

    ticketNumber: {
        default: "0",
        type: String,
    },
    suggestionNumber: {
        default: "0",
        type: String,
    },

    ticketMessage: String,
    suggestionMessage: String,

    ticketCategory: String,
    suggestionCategory: String,

    supportRole: String,
});

module.exports = model('Guild', Guild);