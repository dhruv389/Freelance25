import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const Payment = () => {
    const PAYPAL_KEY=import.meta.env.VITE_PAYPAL_CLIENT_ID
    if (!PAYPAL_KEY) {
        throw new Error('Add your PayPal Client ID to the .env.local file')
    }
    const styles = {
        // shape: "rect",
            layout: "vertical",
    };
    const onApprove=()=>{
        window.location.assign("/your-sucess-page");
    }
    const onCancel = (data) => {
        // Show a cancel page, or return to cart
        window.location.assign("/your-cancel-page");
    }
    return (
        <div className="w-full h-screen">
            <PayPalScriptProvider options={{
                "clientId": PAYPAL_KEY,
                "currency":"USD",
            }}>
                <PayPalButtons style={styles} onApprove={onApprove} onCancel={onCancel}/>
            </PayPalScriptProvider>
        </div>
    );
}

export default Payment
