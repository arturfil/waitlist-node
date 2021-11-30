const { Schema, model } = require('mongoose');

const TurnSchema = Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        note: {
            type: String,
            required: true
        }
    }
)

module.exports = model("Turn", TurnSchema);