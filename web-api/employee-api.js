const mongojs = require('mongojs');
var db = mongojs("syne-hsbc-db", ["employees"]);

class Employees {
    constructor() {

    }
    getAllEmployees() {
        let promise = new Promise((resolve, reject) => {
            db.employees.find((err, docs) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
        return promise;
    }
    getSingleEmployees(id) {
        let promise = new Promise((resolve, reject) => {
            db.employees.findOne({ employeeId: parseInt(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(doc);
            });
        });
        return promise;
    }
    insertEmployee(employees) {
        let promise = new Promise(function (resolve, reject) {
            db.employees.insert(employees, (err) => {
                if (err) {
                    reject("Insertion failed!");
                }
                resolve("Insert Successful!");
            });
        });
        return promise;
    }
}

module.exports = new Employees();