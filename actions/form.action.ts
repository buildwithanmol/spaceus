"use server"
import { isValidPhoneNumber } from "@/lib/clientActions";
import { connectDB } from "@/lib/database"
import { Form } from "@/models/form.model"

export async function createLead(e: FormData) {
    try {
        console.log(process.env.MONGO_URI!)
        const phone = e.get("phone_number")?.toString();
        if (!phone) return;
        if (!isValidPhoneNumber(phone)) {
            return { error: "Enter a 10 digit number", success: false };
        }
        await connectDB()
        const response = await Form.create({ phone: phone })
        if (!response) return { error: "Error creating lead", data: response, success: false }
        return { error: 'Successfully registered', success: true }
    } catch (error: any) {
        if (error.code === 11000) return { error: 'Number already exists.', success: false }
        return error.message
    }
}
