const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const bodyParser = require('body-parser');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true });

const { Departments } = require('./models/Departments');
const { Employees } = require('./models/Employees');

app.use(bodyParser.json());

//GET DEPARTMENTS
app.get('/api/departments', (req, res) => {
    Departments.find({}, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    });
});

//GET EMPLOYEES
app.get('/api/departemts_empl', (req, res) => {
    Employees.find({ departmentId: req.query.departmentId }).exec((err, docs) => {
        if (err) return res.status(400).send(err);
        res.send(docs);
    })
})


//POST DEPARTMENT
app.post('/api/department', (req, res) => {
    const newDepartment = new Departments({
        title: req.body.title,
        details: req.body.details
    });
    newDepartment.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            depID: doc._id
        })
    })
});

//POST EMPLOYEES
app.post('/api/departemts_empl', (req, res) => {
    const newEmployee = new Employees(req.body);
    newEmployee.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            employeeId: doc._id
        })
    })
});

//UPDATE DEPARTMENT
app.post('/api/department_update', (req, res) => {
    Departments.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
});

//UPDATE EMPLOYEE
app.post('/api/employee_update', (req, res) => {
    Employees.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
});

//DELETE DEPARTMENT
app.delete('/api/delete_depart', (req, res) => {
    let id = req.query.id;
    Departments.findByIdAndRemove(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(true);
    })
});

//DELETE EMPLOYEE
app.delete('/api/delete_employee', (req, res) => {
    let id = req.query.id;
    Employees.findByIdAndRemove(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(true);
    })
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("SERVER RUNNING")
})