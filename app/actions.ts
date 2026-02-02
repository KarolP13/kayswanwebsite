"use server";

import { Resend } from "resend";

// Initialize Resend with API Key from environment variables
// If no key is provided, it will fail gracefully or log an error.
const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    campaignType?: string;
    budget?: string;
    message: string;
}

interface ActionState {
    success: boolean;
    message?: string;
    error?: string;
}

export async function sendEmail(formData: ContactFormData): Promise<ActionState> {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("Missing RESEND_API_KEY environment variable.");
        return {
            success: false,
            error: "Server configuration error. Please contact us via Twitter/X.",
        };
    }

    try {
        const { name, email, company, campaignType, budget, message } = formData;

        const data = await resend.emails.send({
            from: "Kayswan Website <onboarding@resend.dev>", // Default Resend testing domain, change to verified domain in prod
            to: ["contact@kayswan.xyz"], // Verified destination address
            subject: `New Inquiry from ${name}`,
            replyTo: email,
            text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "N/A"}
        Campaign Type: ${campaignType || "N/A"}
        Budget: ${budget || "N/A"}
        
        Message:
        ${message}
      `,
        });

        if (data.error) {
            console.error("Resend API Error:", data.error);
            return { success: false, error: data.error.message || "Failed to send message via Resend." };
        }

        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Unexpected error sending email:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown server error";
        return { success: false, error: `Server Error: ${errorMessage}` };
    }
}
