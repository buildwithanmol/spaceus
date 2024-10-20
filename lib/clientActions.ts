import { createLead } from "@/actions/form.action";
import toast from "react-hot-toast";

export const clientAction = async (e: FormData) => {
    const response = await createLead(e);
    if (!response) return { error: response, success: false }
    if (!response.success) {
        toast.error(response.error)
    } else {
        toast.success(response.error)
    }
}
export function isValidPhoneNumber(phone: string | undefined): boolean {
    if (!phone || phone.length !== 10) {
        return false;
    }

    const validStartDigits = ['9', '8', '7', '6'];
    const firstDigit = phone.charAt(0);

    if (!validStartDigits.includes(firstDigit)) {
        return false;
    }

    return true;
}