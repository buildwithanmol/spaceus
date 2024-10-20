import { Schema, model, models } from "mongoose";

const FormSchema = new Schema({
    phone: {
        type: String,
        maxLength: 10,
        required: true,
        unique: true
    }
})

export const Form = models.Form || model("Form", FormSchema)