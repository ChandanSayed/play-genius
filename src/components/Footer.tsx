import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/images/icon-v.png';

const Footer = () => {
  function toTop(e: any) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <footer className="footer relative text-[#31c1ff]  border-t-[#d6f7ff] border-t-[1px] text-lg pt-14 pb-2 px-5 md:px-7 mb-2">
      <div className="group">
        <Link href="#" onClick={toTop} className=" absolute top-[-28px] left-1/2 w-14 h-14 rounded-full z-10 bg-white group-hover:bg-[#31c1ff] shadow-scrollToTop transform translate-x-[-50%]">
          <svg className="fill-[#31c1ff] group-hover:fill-[#fff] h-5 w-5 absolute left-1/2 top-1/2 transition-all block transform translate-x-[-50%] translate-y-[-50%]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.83996 9.48004L9.99996 3.72004L17.1466 9.69338C17.2815 9.80544 17.437 9.88985 17.6045 9.94178C17.7719 9.99372 17.948 10.0122 18.1225 9.99607C18.2971 9.97998 18.4668 9.92965 18.6219 9.84798C18.777 9.7663 18.9146 9.65487 19.0266 9.52004C19.1387 9.38522 19.2231 9.22964 19.275 9.0622C19.327 8.89475 19.3454 8.71872 19.3293 8.54414C19.3132 8.36957 19.2629 8.19988 19.1812 8.04475C19.0996 7.88962 18.9881 7.7521 18.8533 7.64004L10.8533 0.973374C10.6147 0.777264 10.3155 0.670057 10.0066 0.670056C9.6978 0.670056 9.39854 0.777264 9.15996 0.973373L1.15996 7.41337C1.02299 7.52341 0.909119 7.65942 0.824887 7.8136C0.740656 7.96778 0.687727 8.13709 0.66914 8.3118C0.650555 8.4865 0.666679 8.66316 0.716587 8.83161C0.766497 9.00006 0.849205 9.15699 0.959961 9.29338C1.07095 9.42936 1.20769 9.5421 1.36234 9.62511C1.517 9.70813 1.68653 9.75979 1.86119 9.77713C2.03586 9.79447 2.21224 9.77716 2.3802 9.72617C2.54816 9.67519 2.7044 9.59155 2.83996 9.48004Z"></path>
            <path d="M10.8533 10.3066C10.6147 10.1105 10.3155 10.0033 10.0066 10.0033C9.69779 10.0033 9.39853 10.1105 9.15996 10.3066L1.15996 16.7466C1.02299 16.8567 0.909111 16.9927 0.824881 17.1469C0.740648 17.301 0.68772 17.4703 0.669134 17.645C0.650547 17.8198 0.666672 17.9964 0.716581 18.1649C0.766489 18.3333 0.849199 18.4902 0.959953 18.6266C1.06998 18.7636 1.206 18.8775 1.36018 18.9617C1.51436 19.0459 1.68367 19.0989 1.85838 19.1174C2.03308 19.136 2.20974 19.1199 2.37819 19.07C2.54664 19.0201 2.70357 18.9374 2.83995 18.8266L9.99996 13.0533L17.1466 19.0266C17.4189 19.2529 17.77 19.3618 18.1225 19.3293C18.4751 19.2968 18.8003 19.1256 19.0266 18.8533C19.2529 18.581 19.3618 18.23 19.3293 17.8774C19.2968 17.5248 19.1256 17.1996 18.8533 16.9733L10.8533 10.3066Z"></path>
          </svg>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Link href="/" className="md:order-2">
          <Image src={Logo} alt="Footer Logo" className="max-w-[100px]" />
        </Link>
        <ul className="footer-nav md:order-1">
          <li>
            <Link href="#" className="text-base md:text-lg">
              Terms Of Use
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-base md:text-lg">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className="footer-mail md:order-3">
          <Link href="mailto:kids@epicat.fun" className="text-base md:text-lg md:before:absolute before:content-[url(../../public/images/email.svg)] before:inline-block before:w-[26px] before:h-[26px] md:before:top-[50%] md:before:transform md:before:translate-y-[-60%]">
            <span className="md:pl-10 hidden md:block">kids@epicat.fun</span>
          </Link>
        </div>
      </div>
      <p className="copy-right-text text-center mt-7">Epicat © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
