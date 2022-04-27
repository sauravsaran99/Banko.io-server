
const mongoose = require('mongoose');


const accountSchema = new mongoose.Schema({
    status: {type: String, required: true},
    bank_name: {type: String, required: true},
    first_name: {type: String, required: true},
    email: {type: String, required: true},
    last_name: {type: String, required: true},
    addressPermanent: {type: String, required: true},
    statePerm: {type: String, required: true},
    zipPerm: {type: String, required: true},
    addressCurrent: {type: String, required: true},
    stateCurr: {type: String, required: true},
    zipCurr: {type: String, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    money: {type: Number, required: false}
},
{timestamps: true}
);

const Account = mongoose.model('account', accountSchema);

module.exports = Account;