const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    crisisType: { type: String, required: true },
    location: { type: String, required: true },
    severity: { type: String, required: true },
    description: { type: String, required: true }
});

const Report =  mongoose.model("Report", reportSchema);

module.exports = Report;
