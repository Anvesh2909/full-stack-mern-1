import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    events: {
        type: [Schema.Types.ObjectId],
        ref: "Event"
    },
    purchasedTickets: [
        {
            eventId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Event',
            },
            quantity: {
                type: Number,
                required: true,
            },
            paymentId: {
                type: String,
                required: true,
            },
            purchasedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

const User = models.User || model("User", userSchema);

export default User;