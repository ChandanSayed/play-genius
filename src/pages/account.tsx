import Image from 'next/image';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

import Mail from '../../public/images/mail.svg';
import Creative from '../../public/images/auth-creative.png';
import Facebook from '../../public/images/facebook.svg';

const Account = () => {
  return (
    <>
      <Navbar text="text-white" />
      <div className="max-w-[1140px] md:mx-auto bg-primaryBg rounded-3xl p-2 md:p-8 mt-16 md:mt-24 mb-16 mx-4">
        <div className="login-buttons p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-[#ff495c] text-2xl md:text-3xl text-center font-bold mb-6">Account</h2>
            <a href="#">Logout</a>
          </div>
          <hr className="my-6" />
          <div className="flex items-center justify-center gap-x-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-3xl p-6 my-8">
            <div className="left">
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Start your <br /> 7 day free trail
              </h2>
              <p className="text-white">Monthly content updates. Easy cancellation</p>
              <button className="flex items-center rounded-lg py-2 px-4 bg-[#3479ea] transition-all text-white my-4 hover:px-6" style={{ boxShadow: '2px 2px 2px rgba(0,0,0,0.25),-2px -2px 2px rgba(255,255,255,0.4)' }}>
                Start Free Trail
              </button>
            </div>
            <div className="right hidden md:block">
              <Image src={Creative} alt="creative" className="max-w-[160px] w-full" />
            </div>
          </div>
          <div className="block md:flex ">
            <p>Account Information</p>
            <div className="acc-info md:ml-12">
              <div className="flex">
                <p>Name</p> <span className="px-8">:</span> <p>Lifely App</p>
              </div>
              <div className="flex">
                <p>Email</p> <span className="px-8">:</span> <p>applifelly@gmail.com</p>
              </div>
              <div className="flex">
                <p>Phone</p> <span className="px-8">:</span> <button className="text-green-900">Add a phone</button>
              </div>
              <div className="flex">
                <p>Name</p> <span className="px-8">:</span> <Image src={Facebook} alt="Facebook" className="w-6 h-6 mr-3" />
                <Image src={Mail} alt="Mail" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div className="block md:flex">
            <p>Subscription Details</p>
            <p className="md:ml-12 mr-auto text-red-600 font-bold">No Subscription Found</p>
            <a href="#" className="text-blue-900">
              Start Free Trail
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
