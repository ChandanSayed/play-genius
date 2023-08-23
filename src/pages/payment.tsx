import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(event.target.value);
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle payment logic here
  };

  return (
    <>
      <Navbar text="text-white" />
      <div className="container max-w-[1200px] mx-auto py-10 bg-primaryBg px-8 rounded-lg my-8 mt-16 md:mt-24 md:my-12">
        <h1 className="text-2xl md:text-3xl mb-4 font-bold text-red-500 text-center">Setup a payment method</h1>
        <p className="text-center text-gray-700">No commitment, cancel anytime.</p>
        <div className="flex items-start gap-x-12">
          <form onSubmit={handleSubmit}>
            <p className="text-gray-900 mb-4">Contact information</p>
            <div className="mb-5">
              <input type="text" id="name" name="name" placeholder="Name" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={handleNameChange} />
            </div>
            <div className="mb-5">
              <input type="email" id="email" name="email" placeholder="Email" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={handleEmailChange} />
            </div>
            <p className="text-gray-900 mb-4">Billing address</p>
            <div className="mb-5">
              <select onChange={handleCountryChange} className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="us">United States</option>
                <option value="can">Canada</option>
              </select>
            </div>
            <div className="mb-5">
              <input type="text" id="address" name="address" placeholder="Address" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={address} onChange={handleAddressChange} />
            </div>
            <div className="flex gap-x-6">
              <div className="mb-5">
                <input type="text" id="zip" name="zip" placeholder="Zip" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={zip} onChange={handleZipChange} />
              </div>
              <div className="mb-5">
                <input type="text" id="city" name="city" placeholder="City" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={city} onChange={handleCityChange} />
              </div>
            </div>
            <div className="mb-5">
              <input type="text" id="state" name="state" placeholder="State" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={state} onChange={handleStateChange} />
            </div>
            <p className="text-gray-900 mb-4">Credit or debit card information</p>
            <div className="mb-5">
              <input type="text" id="cardNumber" name="cardNumber" placeholder="Card Number" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={cardNumber} onChange={handleCardNumberChange} />
            </div>
            <div className="flex gap-x-6">
              <div className="mb-5">
                <input type="text" id="expiry" name="expiry" placeholder="MM / YY" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={expiry} onChange={handleExpiryChange} />
              </div>
              <div className="mb-5">
                <input type="text" id="cvv" name="cvv" placeholder="CVV" className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={cvv} onChange={handleCvvChange} />
              </div>
            </div>
            <button className="flex items-center justify-center mx-auto rounded-full py-2 px-4 bg-[#3479ea] transition-all text-white my-4 hover:px-6" style={{ boxShadow: '2px 2px 2px rgba(0,0,0,0.25),-2px -2px 2px rgba(255,255,255,0.4)' }}>
              <span className="ml-2">Subscribe</span>
            </button>
            <p className="text-center text-gray-700">
              No commitment, cancel anytime. <br />
              You won't be charged till end of your 7 days trail period.
            </p>
          </form>
          <div className="right mt-8 bg-white rounded-lg p-6 sticky top-52 ml-12">
            <div className="flex">
              <div className="details w-full">
                <p className="text-sm md:text-base">Subscribe to Epicat</p>
                <div className="flex justify-between mb-6">
                  <h3 className="text-base md:text-lg font-bold">7 days trail</h3>
                  <h3 className="text-base md:text-lg font-bold">Free</h3>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm md:text-base">Starting</p>
                  <p className="text-sm md:text-base">
                    <del>9.99</del>
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-base md:text-lg font-bold">Monthly Plan</h3>
                  <h3 className="text-base md:text-lg font-bold">
                    <span>8.99</span>$
                  </h3>
                </div>
                <div className="flex justify-between mb-6">
                  <p className="text-sm md:text-base">sales tax</p>
                  <p className="text-sm md:text-base">per month</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-700">You won't be charged till end of your 7 days trail period.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
