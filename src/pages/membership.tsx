import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaCheck } from 'react-icons/fa';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Membership = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly');
  const [couponCode, setCouponCode] = useState('');
  const [monthlyPrice, setMonthlyPrice] = useState(9.99);
  const [annualPrice, setAnnualPrice] = useState(99.99);
  const [monthlyDiscountPrice, setMonthlyDiscountPrice] = useState(0);
  const [annualDiscountPrice, setAnnualDiscountPrice] = useState(0);
  const [invalidCoupon, setInvalidCoupon] = useState(false);
  const [couponApplyStatus, setCouponApplyStatus] = useState(false);

  const handleSelectPlan = (plan: 'monthly' | 'annual') => {
    setSelectedPlan(plan);
  };

  const handleCouponCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLocaleLowerCase() === 'coupon10') {
      setInvalidCoupon(false);
      let annualDiscount = ((10 / 100) * annualPrice).toFixed(2);
      let monthlyDiscount = ((10 / 100) * monthlyPrice).toFixed(2);
      let annually = parseInt(annualDiscount);
      let monthly = parseInt(monthlyDiscount);

      setMonthlyDiscountPrice(monthlyPrice - monthly);
      setAnnualDiscountPrice(annualPrice - annually);
      setCouponApplyStatus(true);
    } else {
      setInvalidCoupon(true);
    }
  };

  const handlePurchase = () => {
    // TODO: Implement purchase logic
    router.push('/payment'); // Redirect to confirmation page after successful purchase
  };

  return (
    <>
      <Navbar text="text-white" />
      <div className="container max-w-[1200px] mx-auto py-10 bg-primaryBg px-4 md:px-8 rounded-lg my-8 mt-16 md:mt-24 md:my-12">
        <h1 className="text-2xl md:text-3xl mb-4 font-bold text-red-500 text-center">
          Select a plan <br /> and start your 7-Day Free Trial
        </h1>
        <p className="text-center text-gray-700">
          No commitment, cancel anytime. <br />
          You won't be charged till end of your 7 days trail period.
        </p>
        <div className="flex flex-col gap-4 justify-center mt-8">
          <div className={`bg-white rounded-lg overflow-hidden ${selectedPlan === 'monthly' ? 'border-4 border-[#2e8b57]' : 'border-transparent'}  cursor-pointer`} onClick={() => handleSelectPlan('monthly')}>
            <div className="flex justify-between items-center">
              <div className="left flex items-center">
                <div className={`flex items-center p-3  ${selectedPlan === 'monthly' ? 'bg-[#2e8b57] text-white' : 'bg-gray-200'} `}>
                  {selectedPlan === 'monthly' ? <FaCheck className="text-purple-800 text-2xl rounded-full bg-white p-1" /> : ''}{' '}
                  <h2 className="text-xl md:text-3xl  font-bold mb-3 ml-4">
                    Monthly <br /> Plan
                  </h2>
                </div>
                <div className="pl-1 pr-1 md:pl-6">
                  <h3 className="text-lg md:text-3xl">Commitment Free</h3>
                  <p className="text-sm md:text-base">Pay monthly and pause or cancel any time</p>
                  <p className="text-blue-700 text-sm md:text-base">Billed Monthly</p>
                </div>
              </div>
              <div className="price mr-4">
                <p>{monthlyDiscountPrice ? <del>{monthlyPrice}</del> : ''}</p>
                {monthlyDiscountPrice ? <p className="text-lg md:text-2xl font-bold">{monthlyDiscountPrice}</p> : <p className="text-lg md:text-2xl font-bold">{monthlyPrice}</p>}
                <span>Monthly</span>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-lg overflow-hidden ${selectedPlan === 'annual' ? 'border-4 border-[#2e8b57]' : 'border-transparent'}  cursor-pointer`} onClick={() => handleSelectPlan('annual')}>
            <div className="flex justify-between items-center">
              <div className="left flex items-center">
                <div className={`flex items-center p-3  ${selectedPlan === 'annual' ? 'bg-[#2e8b57] text-white' : 'bg-gray-200'} `}>
                  {selectedPlan === 'annual' ? <FaCheck className="text-purple-800 text-2xl rounded-full bg-white p-1" /> : ''}{' '}
                  <h2 className="text-xl md:text-3xl  font-bold mb-3 ml-4">
                    Annual <br /> Plan
                  </h2>
                </div>
                <div className="pl-1 pr-1 md:pl-6">
                  <h3 className="text-lg md:text-3xl">Commitment Free</h3>
                  <p className="text-sm md:text-base">Pay monthly and pause or cancel any time</p>
                  <p className="text-blue-700 text-sm md:text-base">Billed Annually</p>
                </div>
              </div>
              <div className="price mr-4">
                <p>{annualDiscountPrice ? <del>{annualPrice}</del> : ''}</p>
                {annualDiscountPrice ? <p className="text-lg md:text-2xl font-bold">{annualDiscountPrice}</p> : <p className="text-lg md:text-2xl font-bold">{annualPrice}</p>}
                <span>Annual</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 max-w-[400px] mx-auto">
          <h2 className="text-xl font-semibold mb-3 text-center">Apply coupon code</h2>
          <div className="flex">
            <input type="text" placeholder="Enter coupon code" className="border-2 border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow" value={couponCode} onChange={handleCouponCodeChange} />
            <button className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 transition-colors duration-300" onClick={handleApplyCoupon}>
              Apply
            </button>
          </div>
          {invalidCoupon ? <small className="text-red-700">Invalid Coupon</small> : ''}
        </div>

        {couponApplyStatus ? (
          <div className="bg-red-700 text-white p-2 mt-3 rounded-lg">
            <p>Coupon Applied Successfully!</p>
          </div>
        ) : (
          ''
        )}
        <div className="mt-10 text-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300" onClick={handlePurchase}>
            Continue
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Membership;
