import mongoose from "mongoose";


const bookingSchema = mongoose.Schema(
    {
        user: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true
        },
        service: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            required: true
        },
        date: {
            type: Date,
            required: [true, 'Please add a booking date'],
        }
    },
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;