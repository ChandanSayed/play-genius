import { MouseEvent, useEffect } from 'react';
import Image from 'next/image';
import Logo from '/public/images/logo.png';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import MenuDrop from './MenuDrop';
import Link from 'next/link';

type navProps = { text?: string };

const Navbar = ({ text }: navProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const controlDrop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuDrop(prev => !prev);
  };
  useEffect(() => {
    function handleScroll() {
      setMenuDrop(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-between px-4 py-3 bg-primaryBg transition-all`}>
      {/* Logo on the left */}
      <div className={`${showMenu ? 'block' : 'hidden'} md:block fixed top-12 w-full left-0 h-screen bg-primaryBg md:relative md:top-auto md:left-auto md:w-auto md:h-auto transition-all`}>
        <ul className="flex flex-col md:flex-row pt-10 md:pt-0 items-center justify-center transition-all">
          <li>
            <Link className={`mx-4  hover:text-yellow-50 text-[22px] ${text}`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={`mx-4  hover:text-yellow-50 text-[22px] ${text}`} href="/">
              About
            </Link>
          </li>
          <li>
            <Link className={`mx-4  hover:text-yellow-50 text-[22px] ${text}`} href="/">
              Contact
            </Link>
          </li>
          <li className="hidden md:block">
            <Link className={`mx-4 flex  hover:text-yellow-50 text-[22px] ${text}`} href="/" onClick={controlDrop}>
              Shop
              <svg className="w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden text-white">{!showMenu ? <FaBars className="text-xl cursor-pointer" onClick={() => setShowMenu(prev => !prev)} /> : <FaTimes className="text-xl cursor-pointer" onClick={() => setShowMenu(prev => !prev)} />}</div>
      {/* Navigation items in the middle */}
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="max-w-[150px]" />
      </div>

      {/* User icon on the right */}
      <div className="flex items-center justify-end md:w-[200px] lg:w-[400px] relative">
        <FaUser className={`${text} hover:text-yellow-50 cursor-pointer`} onClick={() => setShowAccount(prev => !prev)} />
        <ul className={`absolute right-0 top-6 bg-primary rounded-lg p-2 text-white ${showAccount ? 'block' : 'hidden'}`}>
          <li>
            <Link className="hover:text-gray-500" href="/account">
              Account
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-500" href="login">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <MenuDrop menuDrop={menuDrop} />
    </nav>
  );
};

export default Navbar;
