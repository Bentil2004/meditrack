import React from "react";

function AboutUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          About Us
        </h2>
        <div className="w-12 h-1 bg-[#7E48F0] mx-auto my-3"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mt-8 text-left">

        <div>
          <p className="text-gray-700">
            Picture this… you're in the hospital, and you need a critical
            medical supply, but it’s nowhere to be found. Whether it’s
            misplaced, out of stock, or expired, it can cause unnecessary delays
            and stress.
          </p>

          <p className="text-gray-700 mt-4">
            To ensure smooth operations, you need a seamless inventory
            management system that includes five key elements:
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Real-time tracking of all supplies</li>
            <li>✔ Automated alerts for low stock or expirations</li>
            <li>✔ Quick, easy access to inventory data</li>
            <li>✔ Efficient stock replenishment and organization</li>
            <li>✔ Accurate usage reports for budgeting and forecasting</li>
          </ul>

          <p className="text-gray-700 mt-4">
            MediTrack inventory system is designed to eliminate the chaos and
            keep your hospital running smoothly. With accurate tracking,
            real-time updates, and streamlined processes, you’ll ensure that
            supplies are always available when needed, improving patient care
            and efficiency.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <img src="/logo.png" alt="MediTrack Logo" className="w-24" />
            <h3 className="text-[#7E48F0] text-2xl font-bold">MediTrack</h3>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        <div className="bg-[#7E48F0] text-white p-12 flex shadow-md min-h-[300px]">
          <h3 className="text-4xl font-bold ">
            We all know <br />that efficiency <br />is key... <br />
            Streamline <br /> your hospital<br /> inventory and <br /> save valuable <br /> time and<br />
            resources with <br /> our system!
          </h3>
        </div>

        <div className="p-8">
          <form className="space-y-6">

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-gray-500 block mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full border-b-2 border-[#B69CED] outline-none py-2 text-gray-700"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="text-gray-500 block mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full border-b-2 border-[#B69CED] outline-none py-2 text-gray-700"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-gray-500 block mb-1">Mail</label>
                <input
                  type="email"
                  className="w-full border-b-2 border-[#B69CED] outline-none py-2 text-gray-700"
                  placeholder="Mail"
                />
              </div>
              <div>
                <label className="text-gray-500 block mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full border-b-2 border-[#B69CED] outline-none py-2 text-gray-700"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-500 block mb-1">Message</label>
              <textarea
                className="w-full border-b-2 border-[#B69CED] outline-none py-2 text-gray-700"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#B69CED] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#6a3cc7] transition cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
