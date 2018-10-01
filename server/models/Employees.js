const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const EmployeesSchema = new Schema({
    FIO: {
        type: String,
        required: true,
        maxlength: 120,
    },
    position: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },
    departmentId: {
        type: String,
        required: true,
    }
});


const Employees = mongoose.model('employees', EmployeesSchema);

module.exports = { Employees };