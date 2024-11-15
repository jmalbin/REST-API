const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

let patients = new Object();
patients["123456789"] = ["Justin", "Albin", "111-222-3333"]
patients["987654321"] = ["Jane", "Doe", "444-555-6666"]

let records = new Object();
records["123456789"] = "Status: Healthy"
records["987654321"] = "Status: Cold"

// Gets records
app.get("/records", (req, res) => {
    

    // Verify if the person exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found."})
        return;
    }

    // Verifies that the SSN matches the name of the person
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // First and last name matches
        if (req.body.reasonforvisit === "medicalrecords") {
            // returns medical records
            res.status(200).send(records[req.headers.ssn]);
            return;
        }
        else {
            // returns an error
            res.status(501).send({"msg": "Unable to complete this request: " + req.body.reasonforvisit})
            return;
        }
    }
    else {
        // The name does not match
        res.status(401).send({"msg": "The name does not match the SSN."});
        return;
    }


    // Returns the record
    res.status(200).send({"msg": "HTTP GET - SUCCESS"})
})

// Create a new record
app.post("/", (req, res) => {

    // Create the patient in database
    patients[req.headers.ssn] = [req.headers.firstname, req.headers.lastname, req.headers.phone];
    res.status(200).send(patients)
})

// Update phone number
app.put("/", (req, res) => {

    // Verify if the person exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found."})
        return;
    }

    // Verifies that the SSN matches the name of the person
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // Update the phone number and returns the updated patient information
        patients[req.headers.ssn] = [req.headers.firstname, req.headers.lastname, req.body.phone];
        res.status(202).send(patients[req.headers.ssn]);
        return;
    }
    else {
        // The name does not match
        res.status(401).send({"msg": "The name does not match the SSN."});
        return;
    }

    // Make sure that the patient exists
    res.status(200).send({"msg": "HTTP PUT - SUCCESS"})
})

//Delete records
app.delete("/", (req, res) => {

    // Verify if the person exists
    if (records[req.headers.ssn] === undefined) {
        res.status(404).send({"msg":"Patient not found."})
        return;
    }

    // Verifies that the SSN matches the name of the person
    if (req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]) {
        // Delete patient and all medical records from the database

        delete patients[req.headers.ssn]
        delete records[req.headers.ssn]

        res.status(200).send({"msg": "Deletion successful."});
        return;
    }
    else {
        // The name does not match
        res.status(401).send({"msg": "The name does not match the SSN."});
        return;
    }
})


app.listen(3000);