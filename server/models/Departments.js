const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const DepartmentSchema = new Schema({
  
    title: {
        type: String,
        required: true,
        unique: 1,
    },
    details: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Departments = mongoose.model('departments', DepartmentSchema);

module.exports = { Departments };