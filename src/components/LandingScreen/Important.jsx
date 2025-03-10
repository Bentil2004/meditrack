import React from "react";
import logo from "../../assets/Sum.jpg"

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
      <p className="text-gray-500 max-w-3xl mx-auto mt-2 mb-15">
        Studies show that poor tracking leads to wasted supplies, higher costs, 
        and staff spending hours on manual checks instead of patient care. A smarter system 
        means better efficiency and improved outcomes.
      </p>

      <div className="flex justify-center mt-8 mb-10">
        <div className="bg-[#ffffff] shadow-lg rounded-xl p-6 max-w-lg w-lg">
          <div className="text-[#7E48F0] text-5xl">“</div>
          <h3 className="text-[#7E48F0] text-2xl font-bold">MediTrack</h3>
          <p className="text-gray-700 font-medium">A very self-sufficient website</p>
          <p className="text-gray-400 text-sm mt-2">Dev: Fifi Made It</p>
          <div className="flex justify-end text-[#7E48F0] text-5xl">”</div>
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
        <button className="bg-[#7E48F0] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#6a3cc7] transition">
          Sign up today
        </button>
      </div>

      <div className="mt-20 bg-gray-100 py-12 px-6 rounded-lg ">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              How will you like to checkout
            </h2>
            <h3 className="text-[#7E48F0] text-5xl font-bold mt-2">
              MediTrack!
            </h3>

            <div className="mt-6">
              <button className="bg-[#7E48F0] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#6a3cc7] transition">
                Try for free
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img 
              src={logo}
              alt="Checkout Illustration" 
              className="w-full max-w-lg  shadow-lg h-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Important;
