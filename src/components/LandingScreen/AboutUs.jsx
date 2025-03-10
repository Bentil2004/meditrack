import React from "react";

function AboutUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">

      <div className="grid md:grid-cols-2 gap-8 items-center">
 
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            About us
          </h2>
          <div className="w-12 h-1 bg-[#7E48F0] my-3"></div>

          <p className="text-gray-700 mt-4">
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
            <li>Real-time tracking of all supplies</li>
            <li> Automated alerts for low stock or expirations</li>
            <li>Quick, easy access to inventory data</li>
            <li>Efficient stock replenishment and organization</li>
            <li>Accurate usage reports for budgeting and forecasting</li>
          </ul>

          <p className="text-gray-700 mt-4">
            MediTrack inventory system is designed to eliminate the chaos and
            keep your hospital running smoothly. With accurate tracking,
            real-time updates, and streamlined processes, you’ll ensure that
            supplies are always available when needed, improving patient care
            and efficiency.
          </p>
        </div>

        {/* Right Side (Logo) */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <img src="/logo.png" alt="MediTrack Logo" className="w-24" />
            <h3 className="text-[#7E48F0] text-2xl font-bold">MediTrack</h3>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {/* Left Box (Purple Quote) */}
        <div className="bg-[#7E48F0] text-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold">
            We all know that efficiency is key...
          </h3>
          <p className="mt-4">
            Streamline your hospital inventory and save valuable time and
            resources with our system!
          </p>
        </div>

        {/* Right Side (Contact Form) */}
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border-b-2 border-[#7E48F0] outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border-b-2 border-[#7E48F0] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Mail"
                className="w-full p-3 border-b-2 border-[#7E48F0] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border-b-2 border-[#7E48F0] outline-none"
              />
            </div>

            <textarea
              placeholder="Write your message"
              className="w-full p-3 border-b-2 border-[#7E48F0] outline-none"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="bg-[#7E48F0] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#6a3cc7] transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
