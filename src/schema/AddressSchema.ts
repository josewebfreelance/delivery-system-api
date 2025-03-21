import {Schema} from "dynamoose";

export const AddressSchema = new Schema({
    id: {
        type: Number,
        hashKey: true,
        required: true
    },
    name: {
        type: String,
        rangeKey: true
    },

});
