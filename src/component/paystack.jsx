import React from 'react';
// import logo from './logo.svg';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
// import './App.css';

const config = {
    reference: (new Date()).getTime(),
    email: "oluwaboriife@gmail.com",
    amount: 20000,
    publicKey: 'pk_test_2d24a1391b4bfbc592732a76e50b8bc8c3defdee',
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button 
             className="btn btn-primary deepblue curvebtn my-2 my-sm-0 margin-right colorf" onClick={() => {
                initializePayment()
            }}>Pay through Paystack</button>
        </div>
    );
};

export const Pay = (prop) => {
    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: () => null,
        onClose: () => null
    };

    return (
        <div className="App">
         
          <PaystackHookExample />
        </div>
      );
}

