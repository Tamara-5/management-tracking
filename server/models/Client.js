import mongoose from "mongoose";

// Define the Client schema
const clientSchema = new mongoose.Schema({
    name: String,
    surname: String,
    phoneNumber: String,
    transport: {
        weight: Number,
        volume: Number,
    },
    order: [{
        shipmentNumber: String,
        shipmentType: String,
        location: {
            from: {
                zip: String,
                address: String,
                lat: Number,
                lng: Number,
            },
            to: {
                zip: String,
                address: String,
                lat: Number,
                lng: Number,
            },
        },
    },],
});

// Create models for Client and Order using their respective schemas
const Client= mongoose.model('Client', clientSchema);
export default Client