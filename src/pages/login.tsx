import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Phone from '../../public/images/phone.svg';
import Mail from '../../public/images/mail.svg';
import Google from '../../public/images/google-logo.svg';
import Apple from '../../public/images/apple-logo.svg';
import Facebook from '../../public/images/facebook-logo.svg';
import Creative from '../../public/images/auth-creative.png';

const login = () => {
  return (
    <>
      <Navbar text="text-white" />
      <div className="flex justify-evenly items-center max-w-[1140px] md:mx-auto bg-primaryBg rounded-3xl p-8 mt-16 md:mt-24 mb-16 mx-4">
        <div className="login-buttons p-8">
          <h2 className="text-[#ff495c] text-2xl md:text-3xl text-center font-bold mb-6">Sign In</h2>
          <button className="flex items-center rounded-lg py-2 px-4 bg-[#3479ea] transition-all text-white my-4 w-[280px] hover:px-6" style={{ boxShadow: '2px 2px 2px rgba(0,0,0,0.25),-2px -2px 2px rgba(255,255,255,0.4)' }}>
            <Image src={Facebook} alt="Facebook login" />
            <span className="ml-2">Login with Facebook</span>
          </button>
          <button className="flex items-center rounded-lg py-2 px-4 bg-[#d95040] transition-all text-white my-4 w-[280px] hover:px-8" style={{ boxShadow: '2px 2px 2px rgba(0,0,0,0.25),-2px -2px 2px rgba(255,255,255,0.4)' }}>
            <Image src={Google} alt="Google login" />
            <span className="ml-2">Login with Google</span>
          </button>
          <button className="flex items-center rounded-lg py-2 px-4 bg-[#000] transition-all text-white my-4 w-[280px] hover:px-8" style={{ boxShadow: '2px 2px 2px rgba(0,0,0,0.25),-2px -2px 2px rgba(255,255,255,0.4)' }}>
            <Image src={Apple} alt="Apple login" />
            <span className="ml-2">Login with Facebook</span>
          </button>
          <div className="divider relative my-8">
            <hr className="border-gray-700" />
            <span className="bg-primaryBg text-white text-sm absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">Or</span>
          </div>
          <button className="flex items-center rounded-lg py-2 px-4 bg-[#fff] transition-all text-black my-4 w-[280px] hover:px-8" style={{ boxShadow: '3px 3px 12px rgba(0,0,0,0.25),-5px -5px 4px rgba(255,255,255,0.4)' }}>
            <Image src={Mail} alt="Email login" />
            <span className="ml-2">Login with Email</span>
          </button>
          <button className="flex items-center rounded-lg py-2 px-4 bg-[#fff] transition-all text-black my-4 w-[280px] hover:px-8" style={{ boxShadow: '3px 3px 12px rgba(0,0,0,0.25),-5px -5px 4px rgba(255,255,255,0.4)' }}>
            <Image src={Phone} alt="Phone login" />
            <span className="ml-2">Login with Phone</span>
          </button>
          <div className="text-center">
            <span className="text-zinc-900">Don't have account?</span> <br />
            <Link href="signin" className="text-xl md:text-2xl text-white">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="banner max-w-[300px] hidden md:block">
          <Image src={Creative} alt="Create" className="w-full object-cover" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default login;
