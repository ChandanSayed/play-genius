import { FaSearch } from 'react-icons/fa';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Account = () => {
  return (
    <>
      <Navbar text="text-white" />
      <div className="max-w-[1140px] md:mx-auto bg-primaryBg rounded-3xl p-2 md:p-8 mt-16 md:mt-24 mb-16 mx-4">
        <h1 className="mb-4 text-lg md:text-2xl">Subscriptions</h1>
        <div className="search-input flex items-center mb-4">
          <input type="text" className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-[250px]" />
          <div className="bg-gray-600 p-2 rounded ml-2">
            <FaSearch className=" text-white text-base cursor-pointer" />
          </div>
        </div>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">Show Filters</button>
        <div className="overflow-scroll">
          <table className="w-full mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-1 text-[8px] md:px-6 py-3 text-left md:text-xs text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-1 text-[8px] md:px-6 py-3 text-left md:text-xs text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-1 text-[8px] md:px-6 py-3 text-left md:text-xs text-gray-500 uppercase tracking-wider">Child Name</th>
                <th className="px-1 text-[8px] md:px-6 py-3 text-left md:text-xs text-gray-500 uppercase tracking-wider">Order IDs</th>
                <th className="px-1 text-[8px] md:px-6 py-3 text-left md:text-xs text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-1 text-[8px] md:px-6 py-3 text-left md:text-xs text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-1 text-[8px] md:px-6 py-3 text-left md:text-xs text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-1 text-[8px] md:px-6 py-3 text-left md:text-xs text-gray-500 uppercase tracking-wider">ID</th>
              </tr>
            </thead>
            <tbody>{/* Table rows go here */}</tbody>
          </table>
        </div>
        <div className="mt-4 flex">
          Show 10 hits
          <svg className="w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
