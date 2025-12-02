import mongoose from "mongoose";


const serviceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
            unique: true,
        },
        price: {
            type: String,
            required: [true, 'Please add a price'],
        },
    },
);


const Service = mongoose.model("Service", serviceSchema);

export default Service;