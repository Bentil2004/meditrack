import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Sum.jpg";
import logo1 from "../../assets/pg.png"

function Important() {
  return (
    <section className="text-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Why it’s important?
      </h2>
      <div className="w-12 h-1 bg-[#7E48F0] mx-auto my-3 mb-10"></div>

      <p className="text-gray-600 max-w-2xl mx-auto">
        How much time is your hospital wasting on inefficient inventory management?
      </p>
      <p className="text-gray-500 max-w-3xl mx-auto mt-2">
        Studies show that poor tracking leads to wasted supplies, higher costs, 
        and staff spending hours on manual checks instead of patient care. A smarter system 
        means better efficiency and improved outcomes.
      </p>

      <div className="flex justify-center mt-18 mb-18">
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-xl w-full flex items-center">
          <div className="flex-1">
            <div className="text-[#090949] text-5xl mr-90">“</div>
            <h3 className="text-[#7E48F0] text-4xl font-bold">MediTrack</h3>
            <p className="text-[#090949] font-medium text-2xl">A very self-sufficient website</p>
            <p className="text-gray-400 text-sm mt-2">Dev: Fifi Made It</p>
            <div className="text-[#090949] text-5xl ml-100">”</div>
          </div>

          <div className="ml-4">
            <img src={logo1} alt="Icon" className="w-22 h-18" />
          </div>
        </div>
      </div>

      <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
        Feeling like there’s never enough stock or always scrambling for supplies?
      </p>
      <p className="text-gray-500 max-w-3xl mx-auto">
        Inefficient inventory management wastes time, increases costs, and disrupts patient care. 
        Implement smarter tracking now and stay ahead.
      </p>

      <div className="mt-6">
        <Link to="/SignUp">
          <button className="bg-[#7E48F0] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#6a3cc7] transition cursor-pointer">
            Sign up today
          </button>
        </Link>
      </div>

      <div className="mt-20 bg-gray-100 py-12 px-6 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              How will you like to checkout
            </h2>
            <h3 className="text-[#7E48F0] text-5xl font-bold mt-2">
              MediTrack!
            </h3>

            <div className="mt-6">
              <Link to="/SignUp">
                <button className="bg-[#7E48F0] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#6a3cc7] transition cursor-pointer">
                  Try for free
                </button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img 
              src={logo}
              alt="Checkout Illustration" 
              className="w-full max-w-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Important;
