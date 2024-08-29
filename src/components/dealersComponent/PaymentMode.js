import React from 'react';

function PaymentMode() {
    const paymentModeAccepted = [
        "Deposit to Account",
        "Credit Card/Debit Card",
        "Wallets (PayTM/PhonePe/Amazon etc.)",
        "Net Banking",
        "UPI"
    ];

    return (
        <div className='bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] p-4 mt-4 h-auto'>
        <h1 className='font-bold mb-4 text-[18px]'>Payment Mode</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-y-3'>
            {
                paymentModeAccepted.map((mode, idx) => (
                    <div key={idx} className='flex items-center'>
                        <i className='bi bi-check text-green-500 mr-2'></i>
                        <span>{mode}</span>
                    </div>
                ))
            }
        </div>
    </div>
    );
}

export default PaymentMode;
